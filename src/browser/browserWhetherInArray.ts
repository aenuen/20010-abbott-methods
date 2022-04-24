import {browserUserAgent} from './browserUserAgent'

/**
 * @description 浏览器是否在数组中
 * @param {Array} browserArray 要查询的数组
 * @returns {Boolean}
 */
export const browserWhetherInArray = (browserArray: string[]): boolean => {
  return browserArray.some((value) => browserUserAgent().indexOf(value.toLowerCase()) > 0)
}
