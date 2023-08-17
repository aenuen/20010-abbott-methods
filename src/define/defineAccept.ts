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
  ary.forEach((i: string) => {
    if (accept[i]) {
      n.push(accept[i])
    }
  })
  return n.join(',')
}
