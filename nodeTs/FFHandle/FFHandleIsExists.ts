import fs from "fs";

/**
 * @description 文件或文件夹是否存在
 * @param {string} fOrFPath
 * @constructor
 */
export const FFHandleIsExists=(fOrFPath:string) => {
  return new Promise((resolve) => {
    const boolean = fs.existsSync(fOrFPath)
    resolve(boolean)
  })
}
