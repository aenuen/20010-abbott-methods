import { typeArray } from '../type/typeArray'
import { aoWhetherIn } from './aoWhetherIn'

/**
 * @description 删除空值以及指定的值
 * @param {Array|Object} ao array或object
 * @param {Array|String} aoAssign 现在仅设置为不等于空字符，其它条件可额外增加，如：[null,undefined]
 * @returns {Array|Object}
 */
export const aoDeleteEmpty = (
  ao: any[] | Record<string | number | symbol, any>,
  aoAssign: any[] | string
) => {
  const aoAssignAry = (typeArray(aoAssign) ? aoAssign : [aoAssign]) as any[]
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  for (const key in ao) {
    if (!(ao[key] === '' || aoWhetherIn(aoAssignAry, ao[key], false))) {
      typeArray(ao) ? result.push(ao[key]) : (result[key] = ao[key])
    }
  }
  return result
}
