class Result {
  // 预先处理
  constructor(data, msg = '操作成功', options) {
    this.successCode = 200
    this.failCode = -1
    this.tokenCode = -2
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

  // 创建处理
  createResult() {
    let base = { code: this.code, msg: this.msg }
    this.data && (base.data = this.data)
    this.options && (base = { ...base, ...this.options })
    return base
  }

  // 组装成json数据
  json() {
    return this.createResult()
  }

  // 返回成功
  success(code) {
    this.code = String(code) !== 'undefined' ? +code : +this.successCode
    return this.json()
  }

  // 返回失败
  fail(code) {
    this.code = String(code) !== 'undefined' ? +code : +this.failCode
    return this.json()
  }

  // 返回token失效
  token(code) {
    this.code = String(code) !== 'undefined' ? +code : +this.tokenCode
    return this.json()
  }

}

module.exports = {
  Result
}