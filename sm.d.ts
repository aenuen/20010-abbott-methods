// common
declare const string: string
declare const char: string
declare const number: number
declare const fixed: number
declare const length: number
declare const abs: boolean // 绝对值
// replace
declare const search: string
declare const replace: string
declare const replaceObject: Record<string | number | symbol, any>
// result
declare const resultData: Record<string | number | symbol, any>
declare const resultMsg: string
declare const resultOptions: Record<string | number | symbol, any>
// type
declare const typeValue: any // 类型值
// some
declare const isBig: Boolean // 是否大写
declare const unit: string // 单位
declare const hex: string // 16进制
declare const opacity: number // 半透明值
declare const r: number // 颜色R
declare const g: number // 颜色G
declare const b: number // 颜色B
declare const year: number | string // 年
declare const month: number | string // 月
// validate
declare const rule: any
declare const validateValue: string
declare const callback: any
declare const field: string
declare const action: string
declare const min: number
declare const max: number
declare const fields: Record<string | number | symbol, any>
// time
declare const time: any // 时间
declare const format: string // 格式
declare const zero: boolean // 是否加1->01
declare const timeValue: any // 绝对值
declare const timeOne: any // 时间一
declare const timeTwo: any // 时间二
declare const theTime: any // 传值时间
declare const onwTime: any // 现在时间
declare const isArray: boolean // 是否返回数组
declare const seconds: number // 秒数
declare const timestamp: number // 时间戳
// date
declare const dateValue: any // 日期
declare const dateOne: any // 日期一
declare const dateTwo: any // 日期二
// have
declare const haveAssign: string // 指定的字符
// browser
declare const browserArray: string[] // 要检查的浏览器数组
// calc
declare const calcArray: number[] // 要计算的数组
// class
declare const HTMLElement: HTMLElement // html元素
declare const className: string // 样式名称
// controlInput
declare const controlValue: number | string // 要控制输入的值
declare const controlPrice: number | string // 要控制输入的价格
// ensure
declare const ensureString: number | string // 字符(串)
declare const ensureAssign: number | string // 指定的字符（串）
// file
declare const fileSize: number // 文件大小
// local
declare const localKey: string // key或名称
declare const localValue: string // 值
// string
declare const cnNumber: number // 中文多少个字
declare const enNumber: number // 英文多少个字
// element
declare const queryString: string // 查询的字符(串)
declare const queryCallback: any // 回调
declare const queryArray: any[] // 查询数组
declare const lightObject: Record<string | number | symbol, any> // 查询对象
declare const lightKey: string // 关键字
declare const lightValue: string // 值
declare const lightColor: string // 颜色
declare const summaryParam: Record<string | number | symbol, any>
declare const summaryFields: string[]
declare const GtTime: Date
declare const LtTime: Date
// ao
declare const ao: any[] | Record<string | number | symbol, any>
declare const size: number
declare const aoAssign: any[] | string
declare const aoKey: string | number
declare const aoValue: any
declare const aoHold: any[] | string | number
declare const aoSearch: any
declare const aoMatchCase: boolean
declare const rows: number
declare const columns: number
// array
declare const arrayAny: any[]
declare const arrayTar: any[]
declare const arrayAny1: any[]
declare const arrayAny2: any[]
declare const arrayField: string | number
declare const arrayOrder: boolean
