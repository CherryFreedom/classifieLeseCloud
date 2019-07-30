import Taro from "@tarojs/taro"

const BASE_URL = 'https://api.tianapi.com/txapi/lajifenlei/'
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

/**
 * 根据废弃物名称查询垃圾类型
 * @param {string} word 废弃物名称
 * @param {number} num 返回数量
 * @param {number} page 翻页
 */
export const getGarbage = (word, num = 10, page = 1) => {
  Taro.showLoading({
    title: 'loading'
  })
  return new Promise((resolve, reject) => {
    if (word) {
      Taro.request({
        url: BASE_URL,
        data: {
          key: API_KEY,
          word,
          num,
          page
        },
        header: {
          'content-type': 'application/json'
        }
      }).then(res => {
        Taro.hideLoading()
        resolve(res.data)
      })
    } else {
      Taro.hideLoading()
      reject('关键词不得为空')
    }
  })
}
