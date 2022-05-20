/**
 * @description 得到两个数组的并集
 * @param {[]} arrayAny1
 * @param {[]} arrayAny2
 */
export const arrayUnion = (arrayAny1: any[], arrayAny2: any[]) => {
 return Array.from(new Set([...arrayAny1, ...arrayAny2]))
}
