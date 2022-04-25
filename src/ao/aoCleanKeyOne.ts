/**
 * @description 清除键值-单层
 * @param {[]|{}} ao array或object
 * @returns {[]}
 */
export const aoCleanKeyOne = (ao: any[] | Record<string | number | symbol, any>): any[] => {
  const result = []
  for (const key in ao) {
    result.push(ao[key])
  }
  return result
}
