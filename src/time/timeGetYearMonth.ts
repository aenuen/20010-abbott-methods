import {timeObject} from './timeObject'

/**
 * @description 时间的年份
 * @param {*} [timeValue]
 * @returns {String|Null}
 */
export const timeGetYearMonth = (timeValue: any): string | null => {
    timeValue = timeValue || new timeValue()
    const theObject = timeObject(timeValue)
    return theObject ? `${String(theObject.y).padStart(4, '0')}-${String(theObject.m).padStart(2, '0')}` : null
}
