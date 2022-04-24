import { typeArray } from '../type/typeArray'

/**
 * @description 删除object的元素
 * @param {Object} theObject
 * @param {Array|String} objectKey
 * @returns {Object}
 */
export const objectDeleteElement = (
  theObject: Record<string | number | symbol, any>,
  objectKey: string | string[]
): Record<string | number | symbol, any> => {
  const keyAry = (typeArray(objectKey) ? objectKey : [objectKey]) as string[]
  keyAry.map((item) => delete theObject[item])
  return theObject
}
