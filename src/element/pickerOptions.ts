/**
 * @description 日期快捷选项
 * @return {[{onClick(*): void, text: string}, {onClick(*): void, text: string}, {onClick(*): void, text: string}, {onClick(*): void, text: string}, {onClick(*): void, text: string}]}
 */
export const shortcutDate = (): any => {
  return [
    {
      text: '一周后',
      onClick(picker: any) {
        const date = new Date()
        date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    },
    {
      text: '明天',
      onClick(picker: any) {
        const date = new Date()
        date.setTime(date.getTime() + 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    },
    {
      text: '今天',
      onClick(picker: any) {
        picker.$emit('pick', new Date())
      }
    },
    {
      text: '昨天',
      onClick(picker: any) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    },
    {
      text: '一周前',
      onClick(picker: any) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    }
  ]
}

/**
 * @description 范围日期快捷选项
 * @return {[{onClick(*): void, text: string}, {onClick(*): void, text: string}, {onClick(*): void, text: string}]}
 */
export const shortcutScope = (): any => {
  return [
    {
      text: '最近一周',
      onClick(picker: any) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近一个月',
      onClick(picker: any) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近三个月',
      onClick(picker: any) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
      }
    }
  ]
}

/**
 * @description 大于时间
 * @param [gtTime] 大于什么时间
 * @return {function(*): boolean}
 */
export const gtTime = (GtTime: Date): (arg0: Date) => boolean => {
  GtTime = GtTime ? new Date(GtTime) : new Date()
  return (time: any) => time.getTime() < GtTime.getTime()
}

/**
 * @description 小于时间
 * @param [ltTime] 小于什么时间
 * @return {function(*): boolean}
 */
export const ltTime = (LtTime:Date): (arg0: any) => boolean => {
  LtTime = LtTime ? new Date(LtTime) : new Date()
  return (time:Date) => time.getTime() > LtTime.getTime()
}

/**
 * @description 范围时间
 * @param [GtTime] 大于什么时间
 * @param [LtTime] 小于什么时间
 * @returns {function(*): boolean}
 */
export const scopedTime = (GtTime:Date, LtTime:Date): (arg0: any) => boolean => {
  GtTime = GtTime ? new Date(GtTime) : new Date()
  LtTime = LtTime ? new Date(LtTime) : new Date()
  return (time:Date) => time.getTime() < GtTime.getTime() || time.getTime() > LtTime.getTime()
}