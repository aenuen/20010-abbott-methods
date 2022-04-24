import { aoCleanKeyOne } from './aoCleanKeyOne'

/**
 * @description 是否值在ao中
 * @param {Array|Object} ao array或object
 * @param {*} aoSearch 要搜索的值
 * @param  {Boolean} [aoMatchCase] 是否匹配大小写，true为匹配，false为不匹配，默认为不匹配
 * @returns {Boolean}
 */
export const aoWhetherIn = (
  ao: any[] | Record<string | number | symbol, any>,
  aoSearch: any,
  aoMatchCase: boolean = false
): boolean => {
  const newArray = aoCleanKeyOne(ao) // 函数 some 不能循环 json 类型，统一转成数组
  return newArray.some((key) => {
    let a = JSON.stringify(key)
    let b = JSON.stringify(aoSearch)
    if (!aoMatchCase) {
      a = a.toLowerCase()
      b = b.toLowerCase()
    }
    return a === b
  })
}
