/**
 * @description 键名
 * @param {[]|{}} ao array或object
 * @returns {[]}
 */
export const aoKeyName = (ao: any[] | Record<string | number | symbol, any>): any[] => {
  const result = []
  for (const key in ao) {
    result.push(key)
  }
  return result
}
