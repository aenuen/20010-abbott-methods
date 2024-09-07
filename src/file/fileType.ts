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
    { n: 'word', v: ['doc', 'docx', 'dot'] },
    { n: 'excel', v: ['xls', 'xlsx'] },
    { n: 'ppt', v: ['ppt', 'pptx'] },
    { n: 'pdf', v: ['pdf'] },
    { n: 'txt', v: ['txt'] },
    { n: 'html', v: ['htm', 'html'] },
    { n: 'pic', v: ['png', 'jpg', 'jpeg', 'bmp', 'gif'] },
    {
      n: 'video',
      v: [
        'avi',
        'rm',
        'mpg',
        'mpeg',
        'mpe',
        'wmv',
        'mp4',
        'mkv',
        'vob',
        '3gp',
        'mov'
      ]
    },
    { n: 'audio', v: ['wav', 'mp3', 'wma', 'aif', 'cda', 'mid', 'caf', 'amr'] },
    { n: 'apk', v: ['apk'] },
    { n: 'exe', v: ['exe'] },
    { n: 'zip', v: ['zip'] },
    { n: 'rar', v: ['rar'] },
    { n: 'tif', v: ['tif'] },
    { n: 'axure', v: ['rp'] },
    { n: 'ai', v: ['ai'] },
    { n: 'bat', v: ['bat'] },
    { n: 'css', v: ['css'] },
    { n: 'csv', v: ['csv'] }
  ]
  let result = 'other'
  for (let i = 0; i < array.length; i++) {
    if (array[i].v.includes(suffixName)) {
      result = array[i].n
      break
    }
  }
  return result
}
