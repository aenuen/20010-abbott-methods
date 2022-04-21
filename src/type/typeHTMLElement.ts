/**
 * @description 是否HTMLElement类型
 * @param {*} typeValue
 * @returns {Boolean}
 */
export const typeHTMLElement = (typeValue: any): boolean => {
  const d = document.createElement('div')
  try {
    d.appendChild(typeValue.cloneNode(true))
    return typeValue.nodeType === 1
  } catch (e) {
    return typeValue === window || typeValue === document
  }
}
