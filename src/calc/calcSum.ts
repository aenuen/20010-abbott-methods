/**
 * @description 相加
 * @param calcArray
 * @returns {*}
 */
export const calcSum = (calcArray: number[]) =>
  calcArray.reduce((total, current) => {
    const oneLen = (total.toString().split('.')[1] || '').length
    const twoLen = (current.toString().split('.')[1] || '').length
    const maxLen = oneLen > twoLen ? oneLen : twoLen
    const number = +'1'.padStart(maxLen, '0')
    return (+total * number + +current * number) / number
  })
