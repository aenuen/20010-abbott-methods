/**
 * @description 将文件流保存到本地
 * @param {string} fileName
 * @param {string} type
 * @param {blob} file
 */
export const fileSave = (fileName = 'log', type = 'doc', file: Blob) => {
  const blob = new Blob([file])
  const link = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  link.href = href
  link.download = `${fileName}.${type}`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(href)
}
