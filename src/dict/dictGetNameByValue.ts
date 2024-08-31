/**
 * @description 根据字典的值获取对应的名称
 * @param {Array} anyArray
 * @param {Number} value
 * @returns {String}
 */
export const dictGetNameByValue = (anyArray: any[], value: number) => {
  let name = ''
  anyArray.forEach((item) => {
    if (+item.value === +value) {
      name = item.name
    }
  })
  return name || value
}
