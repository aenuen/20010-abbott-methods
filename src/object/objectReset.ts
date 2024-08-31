/**
 * @description object子元素字段改名
 * @param {Array} anyArray
 * @param {object} obj
 * @returns {Array}
 */
export const objectReset = (
  anyArray: any[],
  obj: Record<string | number | symbol, any>
) => {
  const newArray: any[] = []
  anyArray.forEach((item) => {
    for (const key in obj) {
      item[key] = item[obj[key]]
    }
    newArray.push(item)
  })
  return newArray
}
