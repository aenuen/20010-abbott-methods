import fs from 'fs'
import { ensureFootHave } from '../../src'

/**
 * @description 删除文件
 * @param {String} fFile 要删除的文件
 * @param {String} [fFolder] 文件所在的路径
 */
export const FFHandleDeleteFileSync = (fFile:string, fFolder:string) => {
  if (fFile) {
    const fullPath = `${fFolder ? ensureFootHave(fFolder, '/') : ''}${fFile}`
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath)
      console.log(`文件删除成功：${fullPath}`)
    }
  }
}
