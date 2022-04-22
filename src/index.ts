// addressBar
import {addressBarCurrent} from './addressBar/addressBarCurrent'
import {addressBarFilePath} from './addressBar/addressBarFilePath'
import {addressBarFrom} from './addressBar/addressBarFrom'
import {addressBarHash} from './addressBar/addressBarHash'
import {addressBarHead} from './addressBar/addressBarHead'
import {addressBarHost} from './addressBar/addressBarHost'
import {addressBarHttp} from './addressBar/addressBarHttp'
import {addressBarName} from './addressBar/addressBarName'
import {addressBarPort} from './addressBar/addressBarPort'
import {addressBarQuery} from './addressBar/addressBarQuery'
// format
import { formatAllCn } from './format/formatAllCn'
import { formatAllNumber } from './format/formatAllNumber'
import { formatDate } from './format/formatDate'
import { formatDatetime } from './format/formatDatetime'
import { formatDomain } from './format/formatDomain'
import { formatEmail } from './format/formatEmail'
import { formatExternal } from './format/formatExternal'
import { formatHexColor } from './format/formatHexColor'
import { formatIdCard } from './format/formatIdCard'
import { formatImageBase } from './format/formatImageBase'
import { formatIp } from './format/formatIp'
import { formatMobile } from './format/formatMobile'
import { formatPrice } from './format/formatPrice'
import { formatTelephone } from './format/formatTelephone'
import { formatUrl } from './format/formatUrl'
import { formatUsername } from './format/formatUsername'
import { formatZip } from './format/formatZip'
// some
import { someColorHexToRGB } from './some/someColorHexToRGB'
import { someColorRGBToHex } from './some/someColorRGBToHex'
import { someFebruaryDays } from './some/someFebruaryDays'
import { someMaxZIndex } from './some/someMaxZIndex'
import { somePluralize } from './some/somePluralize'
import { someRandomColor } from './some/someRandomColor'
import { someWhetherLeapYear } from './some/someWhetherLeapYear'
import { someYearMonthDays } from './some/someYearMonthDays'
// time
import { timeAgoCn } from './time/timeAgoCn'
import { timeAgoEn } from './time/timeAgoEn'
import { timeDifference } from './time/timeDifference'
import { timeFormat } from './time/timeFormat'
import { timeGetDay } from './time/timeGetDay'
import { timeGetMonth } from './time/timeGetMonth'
import { timeGetWeek } from './time/timeGetWeek'
import { timeGetYear } from './time/timeGetYear'
import { timeGetYearMonth } from './time/timeGetYearMonth'
import { timeIsEarly } from './time/timeIsEarly'
import { timeNewDate } from './time/timeNewDate'
import { timeObject } from './time/timeObject'
import { timeRelativeTime } from './time/timeRelativeTime'
import { timeSecondBar } from './time/timeSecondBar'
import { timeShort } from './time/timeShort'
import { timeStamp } from './time/timeStamp'
import { timeStampIsMillisecond } from './time/timeStampIsMillisecond'
import {
    H_DATE,
    H_DATE_ABBR,
    H_DATETIME,
    H_DATETIME_ABBR,
    H_H_I,
    H_M_D_H_I,
    H_MH,
    H_Y_M_D_H_I,
    H_YM,
    H_YM_ABBR,
    T_DATE,
    T_DATE_ABBR,
    T_DATETIME,
    T_DATETIME_ABBR,
    T_H_I,
    T_M_D_H_I,
    T_MH,
    T_Y_M_D_H_I,
    T_YM,
    T_YM_ABBR
} from './time/timeText'
// type
import {typeArray} from './type/typeArray'
import {typeBoolean} from './type/typeBoolean'
import {typeDate} from './type/typeDate'
import {typeEmpty} from './type/typeEmpty'
import {typeFloat} from './type/typeFloat'
import {typeFunction} from './type/typeFunction'
import {typeHTMLElement} from './type/typeHTMLElement'
import {typeInt} from './type/typeInt'
import {typeIntMinus} from './type/typeIntMinus'
import {typeIntPositive} from './type/typeIntPositive'
import {typeNumber} from './type/typeNumber'
import {typeObject} from './type/typeObject'
import {typeRegexp} from './type/typeRegexp'
import {typeString} from './type/typeString'
import {typeSymbol} from './type/typeSymbol'
// unicode
import {uniCodeDecode} from './uniCode/uniCodeDecode'
import {uniCodeEncode} from './uniCode/uniCodeEncode'
// validate
import { validateAllCn } from './validate/validateAllCn'
import { validateAllNumber } from './validate/validateAllNumber'
import { validateDate } from './validate/validateDate'
import { validateDatetime } from './validate/validateDatetime'
import { validateEmail } from './validate/validateEmail'
import { validateErrMsg } from './validate/validateErrMsg'
import { validateMobile } from './validate/validateMobile'
import { validatePrice } from './validate/validatePrice'
import { validateRequire } from './validate/validateRequire'
import { validateUsername } from './validate/validateUsername'

export {
    // addressBar
    addressBarCurrent,
    addressBarFilePath,
    addressBarFrom,
    addressBarHash,
    addressBarHead,
    addressBarHost,
    addressBarHttp,
    addressBarName,
    addressBarPort,
    addressBarQuery,
    formatAllCn,
    formatAllNumber,
    formatDate,
    formatDatetime,
    formatDomain,
    formatEmail,
    formatExternal,
    formatHexColor,
    formatIdCard,
    formatImageBase,
    formatIp,
    formatMobile,
    formatPrice,
    formatTelephone,
    formatUrl,
    formatUsername,
    formatZip,
    // some
    someColorHexToRGB,
    someColorRGBToHex,
    someFebruaryDays,
    someMaxZIndex,
    somePluralize,
    someRandomColor,
    someWhetherLeapYear,
    someYearMonthDays,
    // time
    timeAgoCn,
    timeAgoEn,
    timeDifference,
    timeFormat,
    timeGetDay,
    timeGetMonth,
    timeGetWeek,
    timeGetYear,
    timeGetYearMonth,
    timeIsEarly,
    timeNewDate,
    timeObject,
    timeRelativeTime,
    timeSecondBar,
    timeShort,
    timeStamp,
    timeStampIsMillisecond,
    H_YM,
    H_YM_ABBR,
    H_DATE,
    H_DATE_ABBR,
    H_MH,
    H_DATETIME,
    H_DATETIME_ABBR,
    H_H_I,
    H_M_D_H_I,
    H_Y_M_D_H_I,
    T_YM,
    T_YM_ABBR,
    T_DATE,
    T_DATE_ABBR,
    T_MH,
    T_DATETIME,
    T_DATETIME_ABBR,
    T_H_I,
    T_M_D_H_I,
    T_Y_M_D_H_I,
    // type
    typeArray,
    typeBoolean,
    typeDate,
    typeEmpty,
    typeFloat,
    typeFunction,
    typeHTMLElement,
    typeInt,
    typeIntMinus,
    typeIntPositive,
    typeNumber,
    typeObject,
    typeRegexp,
    typeString,
    typeSymbol,
    // uniCode
    uniCodeDecode,
    uniCodeEncode,
    // validate
    validateAllCn,
    validateAllNumber,
    validateDate,
    validateDatetime,
    validateEmail,
    validateErrMsg,
    validateMobile,
    validatePrice,
    validateRequire,
    validateUsername,
}
