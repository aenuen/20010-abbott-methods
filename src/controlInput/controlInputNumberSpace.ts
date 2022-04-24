/**
 * @description 控制输入：每个number个字符中间加空格
 * @param controlValue
 * @param number
 * @returns {string}
 */
export const controlInputNumberSpace = (controlValue: string | number, number: number): string => {
  const theValue = String(controlValue).replace(/\s/g, '')
  const array = []
  const length = Math.ceil(theValue.length / number)
  for (let i = 0; i < length; i++) {
    array.push(theValue.substr(i * number, parseInt(String(number))))
  }
  return array.join(' ')
}
