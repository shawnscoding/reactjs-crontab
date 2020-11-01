const handleNoneExistField = (task, keys) => {
  const { id, name, config, description, fn } = keys
  //   is undedined if user didn't specify
  if (!id || !config || !fn) {
    throw Error('Id, Config, Fn are required fields in tasks props')
  }
  if (!name) {
    task.name = ''
  }
  if (!description) {
    task.description = ''
  }
  return task
}

const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}

export const validateFields = (arr) => {
  return arr.map((task) => {
    let keysInObj = {}

    for (const key in task) {
      // throw error if value is not string

      const isfn = isFunction(task[key])
      if (typeof task[key] === typeof '') {
        console.log(`field of ${key} is string`)
      } else if (isfn) {
        console.log(`field of ${key} is fn`)
      } else {
        throw Error(`The field of ${key} is required to be string`)
      }

      // find out how many and what field it contains

      if (key === 'id') {
        keysInObj.id = true
      }
      if (key === 'name') {
        keysInObj.name = true
      }
      if (key === 'config') {
        keysInObj.config = true
      }
      if (key === 'description') {
        keysInObj.description = true
      }
      if (key === 'fn') {
        keysInObj.fn = true
      }
    }

    const res = handleNoneExistField(task, keysInObj)
    return res
    // handle  nonexistent field
  })
}

export const getHRtime = (hrTime, conditions, hourFormat) => {
  const { min, hour, dom, mon, dow } = conditions
  if (
    min === '*' &&
    hour === '*' &&
    dom === '*' &&
    mon === '*' &&
    dow === '*'
  ) {
    // 1

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
  console.log('hrTime::', hrTime)
  return hrTime
}

export const formatHour = (hour) => {
  if (hour === '*') return { hour }
  let intHour = Number(hour)
  let hourFormat
  if (intHour > 12) {
    intHour -= 12
    hourFormat = 'P.M.'
  } else {
    hourFormat = 'A.M.'
  }

  return { hour: intHour, hourFormat }
}

export const formatMonth = (mon) => {
  if (mon === '*') return mon
  switch (mon) {
    case '01':
      return 'January'
    case '02':
      return 'Faburary'
    case '03':
      return 'March'
    case '04':
      return 'April'
    case '05':
      return 'May'
    case '06':
      return 'June'
    case '07':
      return 'July'
    case '08':
      return 'Augest'
    case '09':
      return 'September'
    case '10':
      return 'October'
    case '11':
      return 'November'
    case '12':
      return 'December'
    default:
      throw Error('in formatMonth fn')
  }
}

export const insertZero = (arr) => {
  console.log('arr ', arr)
  const result = arr.map((item) => {
    if (item.length === 1 && item !== '*') {
      return (item = `0${item}`)
    } else if (item === '*') {
      return item
    } else {
      return item
    }
  })

  console.log('result', result)

  return result
}
