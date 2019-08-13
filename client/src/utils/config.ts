export interface GarbageClassifyItem {
  type: number
  name: string
}

type GarbageClassify = GarbageClassifyItem[]

export const garbageClassify: GarbageClassify = [
  {
    type: 0,
    name: '可回收物'
  },
  {
    type: 1,
    name: '有害垃圾'
  },
  {
    type: 2,
    name: '湿垃圾'
  },
  {
    type: 3,
    name: '干垃圾'
  }
]