import {aoRandom} from './aoRandom'
/**
 * @description 随机生成ao中的值并排队行列
 * @param {[]|{}} ao array或object
 * @param {number} rows 几行
 * @param {number} columns 几列
 * @returns {[]}
 */
export const aoRandomRAC = (
  ao: any[] | Record<string | number | symbol, any>,
  rows: number,
  columns: number
): any[] => {
  const result = []
  for (let i = 0; i < rows; i++) {
    const item = []
    for (let e = 0; e < columns; e++) {
      const value = aoRandom([75, 80, 85], 1)
      item.push(value[0])
    }
    result.push(item)
  }
  return result
}
