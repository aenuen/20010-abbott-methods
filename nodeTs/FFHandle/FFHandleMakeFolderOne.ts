import fs from 'fs'
/**
 * @description 建创目录(单层)
 * @param {String} fFolder 要创建的目录
 * @returns {Promise<Boolean>}
 */
export const FFHandleMakeFolderOne = (fFolder:string) => {
  return new Promise(resolve => fs.mkdir(fFolder, err => {
    err ? resolve(false) : resolve(true)
  }))
}
