import Taro from "@tarojs/taro"

const db = Taro.cloud.database()

export interface GarbageInfo {
  contain: string
  explain: string
  name: string
  tip: string
  type: number
}

/**
 * Insert garbage info into database
 * @param data garbage info
 */
export const addGarbageToCloudDatabase = (data: GarbageInfo) => {
  return db.collection('lese').add({ data })
}

/**
 * call taro cloud
 */
export const handleCallCloud = () => {
  return Taro.cloud
    .callFunction({
      name: "lese",
      data: {}
    })
}
