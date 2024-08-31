/**
 * @description 格式化电话号码
 * @param {number|string} InternationalNumber 国际号
 * @param {number|string} areaNumber 区号
 * @param {number|string} telephoneNumber 固定电话
 * @param {number|string} extensionNumber 转分机号
 * @returns {number|string}
 */
export const telToFull = (
  InternationalNumber: number | string,
  areaNumber: number | string,
  telephoneNumber: number | string,
  extensionNumber: number | string
) => {
  let formattedTel: number | string = ''
  if (telephoneNumber) {
    formattedTel = telephoneNumber
    formattedTel = areaNumber ? `${areaNumber}-${formattedTel}` : formattedTel
    formattedTel =
      InternationalNumber && areaNumber
        ? `${InternationalNumber}-${formattedTel}`
        : formattedTel
    formattedTel = extensionNumber
      ? `${formattedTel}转${extensionNumber}`
      : formattedTel
  }
  return formattedTel
}
