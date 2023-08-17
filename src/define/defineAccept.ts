/*
 * @Author: abbott
 * @Date: 2023-02-27 15:08:34
 * @LastEditors: abbott
 * @LastEditTime: 2023-08-17 15:22:57
 * @Description:
 */
const accept: Record<string | number | symbol, any> = {
  imgAll: 'image/*',
  gif: 'image/gif',
  jpg: 'image/jpg',
  jpeg: 'image/jpeg,',
  png: 'image/png',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  csv: 'text/csv',
  pdf: 'application/pdf',
  zip: 'application/zip'
}

export const defineAccept = (ary: any[]) => {
  const n: any[] = []
  for (let index = 0; index < ary.length; index++) {
    const element = ary[index]
    if (accept[element]) {
      n.push(accept[element])
    }
  }
  return n.join(',')
}
