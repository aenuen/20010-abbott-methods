/**
 * @desc 保证字符串头部含有指定字符串
 * @param {number|string} ensureString
 * @param {number|string} ensureAssign
 * @returns {number|string}
 */
export const ensureHeadHave = (ensureString: number | string, ensureAssign: number | string): string => {
  const theString = String(ensureString)
  const theAssign = String(ensureAssign)
  return theString.substr(0, theAssign.length) === theAssign ? theString : theAssign + theString
}
