import {typeArray} from '../type/typeArray'
import {aoWhetherIn} from './aoWhetherIn'

/**
 * @description 删除值
 * @param {Array|Object} ao array或object
 * @param {*} aoValue 要删除的值
 * @returns {Array|Object}
 */
export const aoDeleteValue = (
  ao: any[] | Record<string | number | symbol, any>,
  aoValue: any
) => {
  const aoValueAry = (typeArray(aoValue) ? aoValue : [aoValue]) as any[]
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  for (const i in ao) {
    if (!aoWhetherIn(aoValueAry, ao[i], true)) {
      typeArray(ao) ? result.push(ao[i]) : (result[i] = ao[i])
    }
  }
  return result
}
