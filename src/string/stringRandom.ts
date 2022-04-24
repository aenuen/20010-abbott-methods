/**
 * @description 随机 number 个字符
 * @param {Number} number 需要几个字符
 * @returns {String}
 */
export const stringRandom = (number: number): string => {
  const theNumber = ~~Math.abs(number)
  let string = ''
  for (let i = 0; i < theNumber; i++) {
    string += Math.random().toString(36).substr(2)
  }
  return string.substr(0, theNumber)
}
