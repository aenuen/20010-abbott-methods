/**
 * @description 关键字高亮
 * @param {Object} lightObject 对象
 * @param {String} lightKey 键
 * @param {String} lightValue 值
 * @param {String} [lightColor] 颜色
 * @returns {String}
 */
export const keyLight = (
  lightObject: Record<string | number | symbol, any>,
  lightKey: string,
  lightValue: string,
  lightColor: string = '#1980ff'
) => {
  return lightValue
    ? lightObject[lightKey]
      ? lightValue.replace(
        new RegExp(lightObject[lightKey], 'ig'),
        (val) => `<span style='color:${lightColor}'>${val}</span>`
      )
      : lightValue
    : '--'
}
