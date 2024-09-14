/**
 * @description 将文件流保存到本地
 * @param {string} fileName 文件名
 * @param {string} fileSuffix 后缀名
 * @param {blob} fileType 文件类型
 */
export const fileSave = (fileName: string = 'log', fileSuffix: string = 'doc', fileType: Blob) => {
  const blob = new Blob([fileType])
  const link = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  link.href = href
  link.download = `${fileName}.${fileSuffix}`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(href)
}
