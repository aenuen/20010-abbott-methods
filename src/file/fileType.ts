import { fileSuffixName } from './fileSuffixName'
/**
 * https://www.iconfont.cn/collections/detail?spm=a313x.collections_index.i1.d9df05512.4e8d3a81H6tDBw&cid=49504
 * @description 从字符串中提取文件的后缀名并进行分类
 * @param {String} string
 * @returns {String}
 */
export const fileType = (string: string): string => {
  const suffixName = fileSuffixName(string)
  const array = [
    { name: 'word', value: ['doc', 'docx', 'dot'] },
    { name: 'excel', value: ['xls', 'xlsx'] },
    { name: 'ppt', value: ['ppt', 'pptx'] },
    { name: 'pdf', value: ['pdf'] },
    { name: 'txt', value: ['txt'] },
    { name: 'html', value: ['htm', 'html'] },
    { name: 'pic', value: ['png', 'jpg', 'jpeg', 'bmp', 'gif'] },
    { name: 'video', value: ['avi', 'rm', 'mpg', 'mpeg', 'mpe', 'wmv', 'mp4', 'mkv', 'vob', '3gp', 'mov'] },
    { name: 'audio', value: ['wav', 'mp3', 'wma', 'aif', 'cda', 'mid', 'caf', 'amr'] },
    { name: 'apk', value: ['apk'] },
    { name: 'exe', value: ['exe'] },
    { name: 'zip', value: ['zip'] },
    { name: 'rar', value: ['rar'] },
    { name: 'tif', value: ['tif'] },
    { name: 'axure', value: ['rp'] },
    { name: 'ai', value: ['ai'] },
    { name: 'bat', value: ['bat'] },
    { name: 'css', value: ['css'] },
    { name: 'csv', value: ['csv'] }
  ]
  let result = 'other'
  array.every((item) => {
    if (item.value.includes(suffixName)) {
      result = item.name
      return false
    }
    return true
  })
  return result
}
