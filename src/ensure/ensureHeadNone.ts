/**
 * @desc 保证字符串头部没有指定字符串
 * @param {number|string} ensureString
 * @param {number|string} ensureAssign
 * @returns {number|string}
 */
export const ensureHeadNone = (ensureString: number | string, ensureAssign: number | string): string => {
  const theString = String(ensureString)
  const theAssign = String(ensureAssign)
  const length = theAssign.length
  return theString.substr(0, length) === theAssign ? ensureHeadNone(theString.substr(length), theAssign) : theString
}
