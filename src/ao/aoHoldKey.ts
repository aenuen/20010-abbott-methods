import {typeArray} from '../type/typeArray'
import {aoWhetherIn} from './aoWhetherIn'
import {aoKeyName} from './aoKeyName'

/**
 * @description 保留键，其它删除
 * @param {Array|Object} ao array或object
 * @param {Array|String} aoHold 要保留的键，可字符或数组
 * @returns {Array|Object}
 */
export const aoHoldKey = (
  ao: any[] | Record<string | number | symbol, any>,
  aoHold: any[] | string | number
) => {
  const aoHoldAry = (typeArray(aoHold) ? aoHold : [aoHold]) as any[]
  const keyArray = aoKeyName(ao)
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao) ? [] : {}
  for (const key in aoHoldAry) {
    if (aoWhetherIn(keyArray, aoHoldAry[key], false)) {
      typeArray(ao)
        ? result.push(ao[aoHoldAry[key]])
        : (result[aoHoldAry[key]] = ao[aoHoldAry[key]])
    }
  }
  return result
}
