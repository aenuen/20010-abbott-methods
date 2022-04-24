/**
 * @description 替换全部
 * @param {Number|String} string
 * @param {Number|String} search
 * @param {Number|String} replace
 * @returns {String}
 */
export const replaceAll = (
  string: string,
  search: string,
  replace: string
): string => {
  return String(string).split(String(search)).join(String(replace))
}
