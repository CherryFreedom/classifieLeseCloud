export interface RequestParams {
  url: string,
  data: any
}

export interface GarbageParams {
  word: string
  num?: number
  page?: number
}

export interface HotGarbageParams {
  type?: 0 | 1 | 2 | 3
  date?: string
}
