/**
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {Array} anyAry 需要查询的数组
 * @param {Array} tarAry 目标数组
 */
export const arrayHasOne = (anyAry: any[], tarAry: any[]) => {
  return tarAry.some((value) => anyAry.indexOf(value) > -1)
}
