import {aoReverse} from '../ao/aoReverse'

/**
 * @description 根据字段进行arrayAny的排序
 * @param {[]} arrayAny 必须是[[],[],...]或[{},{},...]的形式
 * @param {Number|String} arrayField 字段名字：如果是 arrayAny 时，请用 arrayAny 的下标
 * @param {Boolean} [arrayOrder] 排序顺序：(true)从小到大，(false)从大到小
 * @returns {[]}
 * @example arrayOrderByField([[1, "a", 9], [2, "b", 8], [3, "c", 7], [4, "d", 6]], 1, false)
 * @example arrayOrderByField([{"a": 3}, {"a": 2}, {"a": 1}], "a")
 */
export const arrayOrderByField = (arrayAny: any[], arrayField: string | number, arrayOrder: boolean): any[] => {
  const result = arrayAny.sort(function (a, b) {
    const x = a[arrayField]
    const y = b[arrayField]
    return x < y ? -1 : x > y ? 1 : 0
  })
  return arrayOrder ? result : (aoReverse(result) as any[])
}
