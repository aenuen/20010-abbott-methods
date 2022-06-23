export class Result {
  // 预先处理
  private readonly successCode: number;
  private readonly tokenCode: number;
  private readonly errorCode: number;
  private readonly data: string|null | Record<string | number | symbol, any>;
  private readonly msg: string | Record<string | number | symbol, any>;
  private readonly options: Record<string | number | symbol, any> | undefined;
  private code: number | undefined;

  constructor(
    resultData: string|Record<string | number | symbol, any>,
    resultMsg: string = '操作成功',
    resultOptions?: Record<string | number | symbol, any>
  ) {
    this.successCode = 200
    this.tokenCode = -2
    this.errorCode = -1
    this.data = null
    if (arguments.length === 0) {
      this.msg = '操作成功'
    } else if (arguments.length === 1) {
      this.msg = resultData
    } else {
      this.data = resultData
      this.msg = resultMsg
      resultOptions && (this.options = resultOptions)
    }
  }

  // 创建处理
  createResult() {
    this.code = this.code || this.successCode
    let base = {code: this.code, msg: this.msg, data: {}}
    this.data && (base.data = this.data)
    this.options && (base = {...base, ...this.options})
    return base
  }

  // 返回token失效
  token(code: number) {
    this.code = code || this.tokenCode
    return this.json()
  }

  // 返回失败
  error(code: number) {
    this.code = code || this.errorCode
    return this.json()
  }

  // 返回成功
  success(code: number) {
    this.code = code || this.successCode
    return this.json()
  }

  // 组装成json数据
  json() {
    return this.createResult()
  }
}
