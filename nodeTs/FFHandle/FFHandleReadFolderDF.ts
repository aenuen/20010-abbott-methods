import fs from 'fs'
/**
 * @description 目录下所有的文件(不包含文件夹)
 * @param {String} folder 目录
 * @returns {Promise<Array>}
 */
export const FFHandleReadFolderDF = (folder:string) => {
  return new Promise(resolve => fs.readdir(
    folder,
    (err, files) => err ? resolve([]) : resolve(files)
  ))
}
