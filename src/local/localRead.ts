/**
 * @description 读取本地缓存
 * @param {string} localKey
 * @returns {*}
 */
export const localRead = (localKey: string): string => {
  return localStorage.getItem(localKey) || ''
}

