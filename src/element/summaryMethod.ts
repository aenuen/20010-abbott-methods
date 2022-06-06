export const summaryMethod = (summaryParam: Record<string | number | symbol, any>, summaryFields: string[]) => {
  const {columns, data} = summaryParam
  const sums: any[] = []
  columns.forEach((column: Record<string | number | symbol, any>, index: number) => {
    if (index === 0) {
      sums[index] = '合计'
      return
    }
    const values = data.map((item: Record<string | number | symbol, any>) => Number(item[column.property]))
    if (summaryFields.includes(column.property)) {
      sums[index] = values.reduce((prev: number, curr: number): number => {
        const value = Number(curr)
        if (!isNaN(value)) {
          return +(prev + curr).toFixed(2)
        } else {
          return prev
        }
      }, 0)
    }
  })
  return sums
}
