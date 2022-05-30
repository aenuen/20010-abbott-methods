import fs from 'fs'

/**
 * @description 获取目录或文件的系统明细
 * @param {String} fOrFPath 要查看的目录或文件路径
 * @constructor
 */
export const FFHandleGetStats = (fOrFPath: string):Record<string | number | symbol, any> => {
  return new Promise(resolve => fs.stat(
    fOrFPath,
    (err, stats) => {
      err ? resolve({}) : resolve(stats)
    })
  )
}
