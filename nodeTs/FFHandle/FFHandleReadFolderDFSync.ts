import fs from 'fs'

/**
 * @description 目录下所有的文件(不包含文件夹)
 * @param {String} fFolder 目录
 * @returns {Array}
 */
export const FFHandleReadFolderDFSync = (fFolder:string) => {
  const files: any[] = []
  fs.readdirSync(fFolder).forEach((name) => {
    files.push(`${name}`)
  })
  return files
}
