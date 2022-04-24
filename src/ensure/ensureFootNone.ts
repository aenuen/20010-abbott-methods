/**
 * @desc 保证字符串尾部没有指定字符
 * @param {number|string} ensureString
 * @param {number|string} ensureAssign
 * @returns {number|string}
 */
export const ensureFootNone = (ensureString: number | string, ensureAssign: number | string): string => {
  const theString = String(ensureString)
  const theAssign = String(ensureAssign)
  const strLen = theString.length
  const theLen = theAssign.length
  return theString.substr(-theLen) === theAssign ? ensureFootNone(theString.substr(0, strLen - theLen), theAssign) : string
}
