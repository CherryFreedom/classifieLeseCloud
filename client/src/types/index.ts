export interface GarbageInfo {
  contain: string
  explain: string
  name: string
  tip: string
  type: number
}

export type GarbageInfoArray = GarbageInfo[]

export interface GarbageClassify {
  name: string
  type: number
}

export type GarbageClassifyArray = GarbageClassify[]


export interface GarbageClassifyHot {
  name: string
  type: number
  index: number
}

export type GarbageClassifyHotArray = GarbageClassifyHot[]

