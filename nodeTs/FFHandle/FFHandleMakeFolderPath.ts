import path from 'path'
import {FFHandleIsExists} from './FFHandleIsExists'
import { FFHandleIsFolder } from './FFHandleIsFolder'
import { FFHandleMakeFolderOne } from './FFHandleMakeFolderOne'
/**
 * @description 建创目录(多层)
 * @param {String} fFolder 目录字符串
 * @return {*}
 */
export const FFHandleMakeFolderPath = async (fFolder:string) => {
  const isExists = await FFHandleIsExists(fFolder)
  const isFolder = await FFHandleIsFolder(fFolder)
  if (isExists && isFolder) { // 如果该路径存在且不是文件，返回 true
    return true
  } else if (isExists) { // 路径存在，但是是文件，返回 false
    return false
  } else { // 如果该路径不存在
    const tempDir = path.parse(fFolder).dir
    const status = await FFHandleMakeFolderOne(tempDir) // 循环遍历，递归判断如果上级目录不存在，则产生上级目录
    if (status) {
      return await FFHandleMakeFolderOne(fFolder)
    } else {
      return false
    }
  }
}
