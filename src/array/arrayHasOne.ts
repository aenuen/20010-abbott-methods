/**
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {[]} arrayAny 需要查询的数组
 * @param {[]} arrayTar 目标数组
 */
export const arrayHasOne = (arrayAny: any[], arrayTar: any[]) => {
  return arrayTar.some((value) => arrayAny.indexOf(value) > -1)
}
