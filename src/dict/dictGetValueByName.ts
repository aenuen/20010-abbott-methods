/**
 * @description 根据字典的名称获取对应的值
 * @param {Array} anyArray
 * @param {String} name
 * @returns {String}
 */
export const dictGetValueByName = (anyArray: any[], name: string) => {
  if (typeof name === 'number') {
    return name
  } else {
    let value = ''
    anyArray.forEach((item) => {
      if (item.name === name) {
        value = item.value
      }
    })
    return value || name
  }
}
