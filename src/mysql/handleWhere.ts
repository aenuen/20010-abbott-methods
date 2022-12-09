import { modelWhere } from './modelWhere'
/**
 * @description 条件处理
 * @param {[]|null|{}|string} [where] 条件
 * @returns
 */
export const handleWhere = (
  mysqlMulti: any[] | Record<string | number | symbol, any> | string
): string => {
  return mysqlMulti ? modelWhere(mysqlMulti) : '1=1'
}
