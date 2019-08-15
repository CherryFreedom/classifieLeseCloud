import Taro from "@tarojs/taro"
import { RequestParams, GarbageParams, HotGarbageParams } from '../types/params'
import { BASE_URL, API_KEY } from './constant'

// Taro request interceptor
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

const request = ({ url, data, ...config }: RequestParams) => {
  Taro.showLoading({
    title: 'loading'
  })
  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${BASE_URL}${url}`,
      data: {
        key: API_KEY,
        ...data
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
 * @param {number} num  返回数量
 * @param {number} page 翻页
 */
export const getGarbage = ({ word, num = 10, page = 1 }: GarbageParams): any => {
  return request({ url: 'lajifenlei/', data: { word, num, page } }).then(({ newslist }) => newslist)
}

/**
 * 根据废弃物类型和日期查询热门搜索垃圾
 * @param {number} type 垃圾类型 0 可回收、1 有害、2 厨余(湿)、3 其他(干)
 * @param {string} date 日期 eg. 20190809
 */
export const getHotGarbage = (data: HotGarbageParams = {}) => {
  return request({ url: 'hotlajifenlei/', data }).then(({ newslist }) => newslist)
}
