import { ONE_NUMBER, ASTERISK, SEVERAL_NUMBERS } from '../data/types'

export const getHRtime = (hrTime, conditions, hourFormat) => {
  const { min, hour, dom, mon, dow } = conditions
  if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 1s

    hrTime += `every minutes`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 2
    // every hour as long as it's {} minutes
    hrTime += `everyday, every hour as long as it's ${min} minute `
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 3
    hrTime += `everyday, every minute as long as it's ${hour}${hourFormat}  `
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 4
    hrTime += `every hour every minute as long as it's ${dom}th`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 5
    hrTime += `every hour every minute as long as it's in ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 6
    hrTime += `every hour every minute, everyday`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 7
    hrTime += `at ${hour}:${min}${hourFormat} everyday`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 8
    hrTime += `at ${min}minute(s) every hour as long as it's ${dom}th`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 9
    hrTime += `at ${min}minute(s) every hour everyday in ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 10
    hrTime += `at ${min}minute(s) every hour as long as it's ${dow}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 11
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's in ${dom}th`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 12
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's it's in ${mon}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 13
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dow}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 14
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dom}th ${mon}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 15
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dow} and ${dom}th  `
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 16
    hrTime += `at ${hour}:${min}${hourFormat} in ${dom}th ${mon} as long as it's on ${dow}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 17
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dom}th`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 18
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${mon}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 19
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dow}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 20
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dom}th ${mon}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 21
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dom}th and ${dow}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 22
    hrTime += `every minute at ${hour}${hourFormat} as long as it's ${dow}, ${dom}th and ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 23
    hrTime += `every hour every minute as long as it's ${dom}th ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon === '*' &&
    dow !== '*'
  ) {
    // 24
    hrTime += `every hour every minute as long as it's ${dow} and ${dom}th`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 25
    hrTime += `every hour every minute as long as it's ${dow} and ${dom}th ${mon}`
  } else if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 26
    hrTime += `every hour every minute as long as it's ${dow} in ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 27
    hrTime += `at ${min}minute(s) every hour as long as it's ${dow} in ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 28
    hrTime += `at ${min}minute(s) every hour as long as it's ${dow} in ${dom}th ${mon}`
  } else if (
    min !== '*' &&
    hour === '*' &&
    dom !== '*' &&
    mon !== '*' &&
    dow === '*'
  ) {
    // 29
    hrTime += `at ${min}minute(s) every hour as long as it's ${dom}th ${mon}`
  } else if (
    min !== '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 30
    hrTime += `at ${hour}:${min}${hourFormat} as long as it's ${dow} in ${mon}`
  } else if (
    min === '*' &&
    hour !== '*' &&
    dom === '*' &&
    mon !== '*' &&
    dow !== '*'
  ) {
    // 31
    hrTime += `at ${hour}${hourFormat} every minute as long as it's ${dow} in ${mon}`
  } else {
    // there is 1 possibility I can't think of
    throw Error('Sorry, something went wrong in config key of task object')
  }
  // console.log('hrTime::', hrTime)
  return hrTime
}

export const formatHour = (hourStr) => {
  if (typeof hourStr !== typeof '') throw Error('Bad arg')

  let hourFormat = ''

  let intHour = Number(hourStr)
  if (intHour > 12) {
    intHour -= 12
    hourFormat = 'PM'
  } else {
    hourFormat = 'AM'
  }

  const res = `${intHour.toString()}${hourFormat}`

  return res
}

export const formatMonth = (mon) => {
  if (typeof mon !== typeof {}) throw Error('Bad argument')
  const { value } = mon

  const msg = `Bad config, month is required to be less than 13`
  const formatted = value.map((val) => {
    switch (val) {
      case '*':
        return '*'
      case '1':
        return 'January'
      case '2':
        return 'Faburary'
      case '3':
        return 'March'
      case '4':
        return 'April'
      case '5':
        return 'May'
      case '6':
        return 'June'
      case '7':
        return 'July'
      case '8':
        return 'Augest'
      case '9':
        return 'September'
      case '10':
        return 'October'
      case '11':
        return 'November'
      case '12':
        return 'December'
      default:
        throw Error(msg)
    }
  })
  const result = { ...mon, value: formatted }
  return result
}

export const formatMonthInDashboard = (val) => {
  switch (val) {
    case '*':
      return '*'
    case '1':
      return 'January'
    case '2':
      return 'Faburary'
    case '3':
      return 'March'
    case '4':
      return 'April'
    case '5':
      return 'May'
    case '6':
      return 'June'
    case '7':
      return 'July'
    case '8':
      return 'Augest'
    case '9':
      return 'September'
    case '10':
      return 'October'
    case '11':
      return 'November'
    case '12':
      return 'December'
    default:
  }
}

export const formatDOW = (dow) => {
  if (typeof dow !== typeof {}) throw Error('Bad args')
  const msg = 'Bad config, dow is required to be less than 8'
  const { value } = dow
  const formatted = value.map((val) => {
    switch (val) {
      case '*':
        return '*'
      case '1':
        return 'Monday'
      case '2':
        return 'Tuesday'
      case '3':
        return 'Wednesday'
      case '4':
        return 'Thirsday'
      case '5':
        return 'Friday'
      case '6':
        return 'Saturday'
      case '7':
        return 'Sunday'
      default:
        throw Error(msg)
    }
  })
  const result = { ...dow, value: formatted }
  return result
}

export const formatDOWGudie = (dows) => {
  const msg = `Bad config, month is required to be less than 13`
  const formatted = dows.map((value) => {
    switch (value) {
      case '1':
        return { hrText: 'Monday', value }
      case '2':
        return { hrText: 'Tuesday', value }
      case '3':
        return { hrText: 'Wednesday', value }
      case '4':
        return { hrText: 'Thirsday', value }
      case '5':
        return { hrText: 'Friday', value }
      case '6':
        return { hrText: 'Saturday', value }
      case '7':
        return { hrText: 'Sunday', value }
      default:
        throw Error(msg)
    }
  })
  return formatted
}

export const insertZero = (arr) => {
  // console.log('arr ', arr)
  const result = arr.map((item) => {
    if (item.length === 1 && item !== '*') {
      return (item = `0${item}`)
    } else if (item === '*') {
      return item
    } else {
      return item
    }
  })

  // console.log('result', result)

  return result
}

export const converConfigValuesToObject = (str) => {
  const arr = str.split(',')
  if (arr[0] === '*') {
    return {
      type: ASTERISK,
      length: arr.length,
      value: arr
    }
  }
  if (isNaN(arr[0])) {
    // means this value is timezone
    return {
      type: ASTERISK,
      length: arr.length,
      value: arr
    }
  }
  if (arr.length === 1) {
    const value = arr.map((item) => {
      if (item.length === 2 && item[0] === '0') {
        // means user formatted time differenctly like this 01 , 02
        const newItem = item[1]
        return newItem
      }
      return item
    })
    return {
      type: ONE_NUMBER,
      length: arr.length,
      value
    }
  } else if (arr.length > 1) {
    const value = arr.map((item) => {
      if (item.length === 2 && item[0] === '0') {
        // means user formatted time differenctly like this 01 , 02
        const newItem = item[1]
        return newItem
      }
      return item
    })

    return {
      type: SEVERAL_NUMBERS,
      length: arr.length,
      value
    }
  } else {
    throw Error('Bad Settings')
  }
}

// export const isShouldBeOn = (value, fieldValue) => {
//   const splitted = fieldValue.split(',')

//   if (fieldValue === '*') {
//     return false
//   } else if (splitted.length === 1) {
//     if (fieldValue === value) {
//       return true
//     } else {
//       return false
//     }
//   } else if (splitted.length > 1) {
//     const found = splitted.find((val) => val === value)

//     if (found) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

//  const preEl = useRef(null)
// const handleCopyText = (e) => {
//   const copyText = preEl.current
//   const contents = copyText.innerHTML
//   console.log('contents', contents)
//   var tempInput = document.createElement('input')
//   tempInput.value = contents
//   document.body.appendChild(tempInput)
//   tempInput.select()
//   tempInput.setSelectionRange(0, 99999)
//   document.execCommand('copy')
// }

export const getExplicitTz = (tz) => {
  let explicitTz
  if (tz === 'utc') {
    explicitTz = 'UTC'
  } else if (tz === 'local') {
    explicitTz = Intl.DateTimeFormat().resolvedOptions().timeZone
  }
  return explicitTz
}

export const getCurrentTime = (timeZone) => {
  let now
  if (timeZone === 'UTC') {
    now = new Date(new Date().toUTCString().slice(0, -3))
  } else if (timeZone === 'local') {
    now = new Date()
  } else if (typeof timeZone === typeof '') {
    const date = new Date()
    now = new Date(
      date.toLocaleString('en-US', {
        timeZone: timeZone
      })
    )
  } else {
    throw Error(`Unsupported timezone: ${timeZone}`)
  }

  return now
}
