import fs from 'fs'
import { ensureFootHave } from '../../src'
/**
 * @description 删除文件
 * @param {String} fFile 要删除的文件
 * @param {String} [fFilePath] 文件所在的路径
 * @returns {Promise<Boolean>}
 */
export const FFHandleDeleteFile = (fFile:string, fFilePath:string) => {
  const fullPath = `${fFilePath ? ensureFootHave(fFilePath, '/') : ''}${fFile}`
  return new Promise(resolve => fs.unlink(fullPath, err => err ? resolve(false) : resolve(true)))
}
