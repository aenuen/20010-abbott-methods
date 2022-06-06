/**
 * @description 获取(定义)表格的index
 * @param data
 */
export const elTableIndex = (data: Record<string | number | symbol, any>) => {
  const {row, rowIndex} = data
  row.index = rowIndex
}
