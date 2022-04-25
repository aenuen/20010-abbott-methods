import {typeArray} from '../type/typeArray'

/**
 * @description 保留值，其它删除
 * @param {[]|{}} ao array或object
 * @param {*} aoValue 要保留的值，可字符或数组
 * @returns {[]|{}}
 */
export const aoHoldValue = (ao: any[] | Record<string | number | symbol, any>, aoValue: any): any[] | Record<string | number | symbol, any> => {
  aoValue = typeArray(aoValue) ? aoValue : [aoValue]
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao) ? [] : {}
  for (const k in aoValue) {
    for (const e in ao) {
      if (JSON.stringify(aoValue[k]) === JSON.stringify(ao[e])) {
        typeArray(ao) ? result.push(ao[e]) : (result[e] = ao[e])
      }
    }
  }
  return result
}
