import {calcSum} from '../calc/calcSum'
export const summaryMethod = (param: Record<string | number | symbol, any>, fields: string[]) => {
  const { columns, data } = param
  const sums:any[] = []
  columns.forEach((column:Record<string | number | symbol, any>, index:number) => {
    if (index === 0) {
      sums[index] = '合计'
      return
    }
    const values = data.map((item:Record<string | number | symbol, any>) => Number(item[column.property]))
    if (fields.includes(column.property)) {
      sums[index] = values.reduce(async (prev:number, curr:number) => {
        const value = Number(curr)
        if (!isNaN(value)) {
          return await calcSum([prev, curr])
        } else {
          return prev
        }
      }, 0)
    }
  })
  return sums
}
