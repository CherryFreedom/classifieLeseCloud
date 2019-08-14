import { garbageClassifyArray } from './config'

export const transGarbageClassify = (type) => {
  const garbage = garbageClassifyArray[type] || {}
  return garbage.name || ''
}