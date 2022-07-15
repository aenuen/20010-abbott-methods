class Result {
  // 预先处理
  constructor(data, msg = '操作成功', options) {
    this.data = null
    this.successCode = 200
    this.failCode = -1
    this.tokenCode = -2
    if (0 === arguments.length) {
      this.msg = '操作成功'
    } else if (1 === arguments.length) {
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
  json(res) {
    res.json(this.createResult())
  }

  // 返回成功
  success(res, code) {
    this.code = String(code) !== 'undefined' ? +code : this.successCode
    this.json(res)
  }

  // 返回失败
  error(res, code) {
    this.code = String(code) !== 'undefined' ? +code : this.failCode
    this.json(res)
  }

  // 返回token失效
  token(res, code) {
    this.code = String(code) !== 'undefined' ? +code : this.tokenCode
    this.json(res)
  }
}

module.exports = {
  Result
}
