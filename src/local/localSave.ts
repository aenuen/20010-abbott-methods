/**
 * @description 存储数据
 * @param localKey
 * @param localValue
 */
export const localSave = (localKey: string, localValue: string): void => {
  localStorage.setItem(localKey, localValue)
}
