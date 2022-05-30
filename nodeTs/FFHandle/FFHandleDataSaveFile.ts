import fs from 'fs'
import { ensureFootHave } from '../../src'

/**
 * @description 将数据保存成文件
 * @param {*} fData 文件数据
 * @param {String} fFile 文件名
 * @param {String} [fFolder] 目录
 * @returns {Promise<String>}
 */
export const FFHandleDataSaveFile = (fData:any, fFile:string, fFolder:string) => {
  const fullPath = `${fFolder ? ensureFootHave(fFolder, '/') : ''}${fFile}`
  return new Promise(resolve => fs.writeFile(fullPath, fData, err => err ? resolve('') : resolve(fullPath)))
}
