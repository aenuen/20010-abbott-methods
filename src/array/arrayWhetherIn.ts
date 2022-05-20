/**
 * @description 值是否在数组中
 * @param {[]} arrayAny 用来验证的列表
 * @param {*} value 要验证的值
 * @return {Boolean}
 */
export const arrayWhetherIn = (arrayAny: any[], value: any): boolean => {
  for (let i = 0; i < arrayAny.length; i++) {
    if (value === arrayAny[i]) {
      return true
    }
  }
  return false
}
