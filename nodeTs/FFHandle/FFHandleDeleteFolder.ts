import fs from 'fs'

/**
 * @description 删除文件夹
 * @param fFolder 目录
 * @returns {Promise<Boolean>}
 */
export const FFHandleDeleteFolder = (fFolder: string) => new Promise(resolve => fs.rmdir(
  fFolder,
  {
    recursive: true
  },
  err => err ? resolve(false) : resolve(true)
))
