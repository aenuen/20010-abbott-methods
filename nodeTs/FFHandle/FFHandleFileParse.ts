const fs = require('fs')

export class FFHandleFileParse {
  // 预先处理
  private suffix: string | undefined;
  private path: string | undefined;
  private filePath: string | undefined;
  private newFile: string | undefined;
  private originalname: string | undefined;

  constructor(aFile: any) {
    this.parseFile(aFile)
  }

  // 解析文件
  parseFile(file: Record<string | number | symbol, any>) {
    const {destination: des, filename = '', originalname = '', path = ''} = file
    const suffix = originalname.split('.')[1] || ''
    this.suffix = suffix
    this.path = path
    this.filePath = `${des}${filename}.${suffix}`
    this.newFile = `${filename}.${suffix}`
    this.originalname = <string>originalname
  }

  // 解析
  parse() {
    return new Promise((resolve, reject) => {
      if (this.suffix) {
        if (fs.existsSync(this.path) && !fs.existsSync(this.filePath)) {
          fs.renameSync(this.path, this.filePath)
        }
        resolve(this)
      } else {
        reject(new Error('上文件的后缀名无效'))
      }
    })
  }
}
