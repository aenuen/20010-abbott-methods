/**
 * @desc 保证字符串尾部含有指定字符
 * @param {number|string} ensureString
 * @param {number|string} ensureAssign
 * @returns {number|string}
 */
export const ensureFootHave = (ensureString: number | string, ensureAssign: number | string): string => {
  const theString = String(ensureString)
  const theAssign = String(ensureAssign)
  return theString.substr(-theString.length) === theAssign ? theString : theString + theAssign
}
