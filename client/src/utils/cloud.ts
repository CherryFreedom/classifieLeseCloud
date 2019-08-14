import Taro from "@tarojs/taro"
import { GarbageInfo } from '../types'
const db = Taro.cloud.database()

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
