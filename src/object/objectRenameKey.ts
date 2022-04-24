/**
 * @description 重命名object的键名
 * @param {Object} theObject
 * @param {String} objectKey
 * @param {String} newKey
 * @returns {Object}
 */
export const objectRenameKey = (
  theObject: Record<string | number | symbol, any>,
  objectKey: string,
  newKey: string
): Record<string | number | symbol, any> => {
  if (Object.keys(theObject).indexOf(objectKey) !== -1) {
    theObject[newKey] = theObject[objectKey]
    delete theObject[objectKey]
  }
  return theObject
}
