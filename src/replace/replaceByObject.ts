import {replaceAll} from './replaceAll'

/**
 * @description 根据对象替换
 * @param {Number|String} string
 * @param {Object} replaceObject
 * @returns {String}
 */
export const replaceByObject = (
  string: string,
  replaceObject: Record<string | number | symbol, any>
): number | string => {
  Object.keys(replaceObject).forEach((key) => {
    string = replaceAll(string, key, replaceObject[key])
  })
  return string
}
