/*
 * @Author: hao.zhang
 * @Date: 2019-08-08 20:09:35
 * @LastEditors: hao.zhang
 * @LastEditTime: 2019-08-09 18:47:01
 */
import Taro from "@tarojs/taro"

const BASE_URL = 'https://api.tianapi.com/txapi/'
const API_KEY = '921042372c476dc208b1d6819d8f1511'

// 拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
    .then(res => {
      console.log(`http <-- ${url} result:`, res)
      return res
    })
}

Taro.addInterceptor(interceptor)
Taro.addInterceptor(Taro.interceptors.logInterceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)

interface RequestParams {
  url: string,
  params: any
}

interface GarbageParams {
  word: string,
  num?: number,
  page?: number
}

interface HotGarbageParams {
  type: number,
  date?: string
}

const request = ({ url, params, ...config }: RequestParams) => {
  Taro.showLoading({
    title: 'loading'
  })
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${BASE_URL}${url}`,
      data: {
        key: API_KEY,
        ...params
      },
      header: {
        'content-type': 'application/json'
      },
      ...config
    }).then(({ data }) => {
      if (data.code === 200) {
        resolve(data)
      } else {
        reject(data.code)
      }
      Taro.hideLoading()
    })
  })
}

/**
 * 根据废弃物名称查询垃圾类型
 * @param {string} word 废弃物名称
 * @param {number} num 返回数量
 * @param {number} page 翻页
 */
export const getGarbage = ({ word, num = 10, page = 1 }: GarbageParams) => {
  return request({ url: 'lajifenlei/', params: { word, num, page } }).then(({ newslist }) => newslist)
}

/**
 * 根据废弃物类型和日期查询热门搜索垃圾
 * @param {number} type 垃圾类型 0为可回收、1为有害、2为厨余(湿)、3为其他(干)
 * @param {string} date 日期 eg. 20190809
 */
export const getHotGarbage = ({ type, date }: HotGarbageParams) => {
  return request({ url: 'hotlajifenlei/', params: { type, date } }).then(({ newslist }) => newslist)
}
