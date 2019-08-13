import { garbageClassify } from './config'

export const transGarbageClassify = (type) => {
  const garbage = garbageClassify[type] || {}
  return garbage.name || ''
}