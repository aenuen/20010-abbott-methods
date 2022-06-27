class Result {
  // 预先处理
  constructor(data, msg = '操作成功', options) {
    this.sCode = 200
    this.eCode = -1
    this.tCode = -2
    this.data = null
    if (arguments.length === 0) {
      this.msg = '操作成功'
    } else if (arguments.length === 1) {
      this.msg = data
    } else {
      this.data = data
      this.msg = msg
      options && (this.options = options)
    }
  }

  // 组装成json格式
  createResult() {
    this.code = this.code || this.sCode
    let base = { code: this.code, msg: this.msg }
    this.data && (base.data = this.data)
    this.options && (base = { ...base, ...this.options })
    return base
  }

  // 返回成功
  success(code) {
    this.code = code ? +code : this.sCode
    return this.createResult()
  }

  // 返回失败
  error(code) {
    this.code = code ? +code : this.eCode
    return this.createResult()
  }

  // 返回token失效
  token(code) {
    this.code = code ? +code : this.tCode
    return this.createResult()
  }
}

module.exports = {
  Result
}