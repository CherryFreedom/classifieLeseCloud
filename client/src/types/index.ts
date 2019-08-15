export interface GarbageInfo {
  name: string
  type: number
  aipre: number
  explain: string
  contain: string
  tip: string
}

export type GarbageInfoArray = GarbageInfo[]

export interface GarbageClassify {
  name: string
  type: number
  explain: string
  contain: string
  tip: string
}

export type GarbageClassifyArray = GarbageClassify[]


export interface GarbageClassifyHot {
  name: string
  type: number
  index: number
}

export type GarbageClassifyHotArray = GarbageClassifyHot[]

