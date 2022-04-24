import {holdFirst} from '../hold/holdFirst'
import {typeNumber} from '../type/typeNumber'

/**
 * @description 控制价格的输入
 * @param {number|string} controlPrice
 * @param {number} [number]
 * @returns {string}
 */
export const controlInputPrice = (controlPrice: string | number, number: number): string => {
  let thePrice = holdFirst(holdFirst(String(controlPrice).replace(/[^\d.-]/g, ''), '-'), '.')
  if (thePrice.substr(0, 1) === '.') {
    thePrice = '0.' + thePrice.substr(1)
  }
  if (thePrice.substr(0, 2) === '-.') {
    thePrice = '-0.' + thePrice.substr(2)
  }
  number = typeNumber(number) ? ~~number : 2
  const ary = thePrice.split('.')
  const int = ary[0]
  const float = ary[1] || null
  return float && float.length > number ? int + '.' + float.substr(0, number) : thePrice
}
