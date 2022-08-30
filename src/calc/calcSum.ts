import { typeArray } from '../type/typeArray'
/**
 * @description 相加
 * @param calcArray
 * @returns {[]}
 */
export const calcSum = (calcArray: number[]): number => {
  if (typeArray(calcArray) && calcArray.length > 0) {
    return calcArray.reduce((total, current) => {
      let oneLen, twoLen
      try {
        oneLen = total.toString().split('.')[1].length
      } catch (e) {
        oneLen = 0
      }
      try {
        twoLen = current.toString().split('.')[1].length
      } catch (e) {
        twoLen = 0
      }
      const number = Math.pow(10, Math.max(oneLen, twoLen))
      return (total * number + current * number) / number
    })
  } else {
    return 0
  }
}
