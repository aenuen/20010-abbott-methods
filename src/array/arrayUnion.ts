/**
 * @description 得到两个数组的并集
 * @param {Array} arrayAny1
 * @param {Array} arrayAny2
 */
export const arrayUnion = (arrayAny1: any[], arrayAny2: any[]) =>
  Array.from(new Set([...arrayAny1, ...arrayAny2]))
