import { replaceAll } from '../replace/replaceAll'
import { replaceOne } from '../replace/replaceOne'

/**
 * @description 保留第一个指定的值
 * @param {string} string
 * @param {string} char
 * @returns {string}
 */
export const holdFirst = (
  string: string,
  char: string
): string => {
  const tempValue = '##@!@##@!@##'
  const replaceFirstChar = replaceOne(String(string), String(char), tempValue)
  const otherReplaceEmpty = replaceAll(replaceFirstChar, String(char), '')
  return replaceOne(otherReplaceEmpty, tempValue, String(char))
}
