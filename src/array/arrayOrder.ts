import {typeNumber} from '../type/typeNumber'

/**
 * @description 排序数组
 * @param {[]} arrayAny 要排序的数组
 * @param {Boolean} [arrayOrder] 排序方式：(true)从小到大，(false)从大到小
 * @returns {[]}
 */
export const arrayOrder = (arrayAny: any[], arrayOrder: boolean): any[] => {
  const ary = [...arrayAny]
  ary.sort(function (a, b) {
    a = typeNumber(a) ? +a : a
    b = typeNumber(b) ? +b : b
    return a > b ? 1 : -1
  })
  return arrayOrder ? ary : ary.reverse()
}
