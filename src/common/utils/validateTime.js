import { SEVERAL_NUMBERS, ONE_NUMBER, ASTERISK } from '../data/types'

export const IsNeededToRunNow = (time, currentTime) => {
  if (typeof time !== typeof {}) throw Error('Bad Arg')
  const { type, value } = time

  if (type === ASTERISK) {
    return { isNeededToRun: true }
  } else if (type === ONE_NUMBER) {
    // just one number
    if (currentTime === value[0]) {
      return { isNeededToRun: true }
    }
  } else if (type === SEVERAL_NUMBERS) {
    const neededToRun = value.find((item) => {
      if (currentTime === item) {
        return item
      }
    })
    if (neededToRun) {
      return { isNeededToRun: true }
    }
  }
  return { isNeededToRun: false }
}

export const validateMin = (min) => {
  // could be *, one num or several
  if (typeof min !== typeof {}) throw Error('Bad Arg')
  let msg = ''

  if (min.type === ASTERISK) {
    return { error: false, msg }
  } else if (min.type === ONE_NUMBER) {
    // just one number
    const value = min.value[0]
    if (Number(value) > 59) {
      msg = `Bad Config: minute is required to be less than 60`
      return { error: true, msg }
    }
  } else if (min.type === SEVERAL_NUMBERS) {
    const values = min.value
    const badConfig = values.find((item) => {
      if (Number(item) > 59) {
        return item
      }
    })
    if (badConfig) {
      msg = `Bad Config: minute is required to be less than 60`
      return { error: true, msg }
    }
  }
  return { error: false, msg }
}

export const validateHour = (hour) => {
  // could be *, one num or several
  if (typeof hour !== typeof {}) throw Error('Bad Arg')
  let msg = ''
  if (hour.type === ASTERISK) {
    return { error: false, msg }
  } else if (hour.type === ONE_NUMBER) {
    // just one number
    const value = hour.value[0]
    if (Number(value) > 23) {
      msg = `Bad Config: Hour is required to be less than 24`
      return { error: true, msg }
    }
  } else if (hour.type === SEVERAL_NUMBERS) {
    const values = hour.value
    const badConfig = values.find((item) => {
      if (Number(item) > 23) {
        return item
      }
    })
    if (badConfig) {
      msg = `Bad Config: Hour is required to be less than 24`
      return { error: true, msg }
    }
  }
  return { error: false, msg }
}

export const validateDom = (dom) => {
  // could be *, one num or several
  if (typeof dom !== typeof {}) throw Error('Bad Arg')
  let msg = ''

  if (dom.type === ASTERISK) {
    return { error: false, msg }
  } else if (dom.type === ONE_NUMBER) {
    // just one number
    const value = dom.value[0]
    if (Number(value) > 31) {
      msg = `Bad Config: DOM is required to be less than 32`
      return { error: true, msg }
    }
  } else if (dom.type === SEVERAL_NUMBERS) {
    const values = dom.value
    const badConfig = values.find((item) => {
      if (Number(item) > 31) {
        return item
      }
    })
    if (badConfig) {
      msg = `Bad Config: DOM is required to be less than 32`
      return { error: true, msg }
    }
  }
  return { error: false, msg }
}

export const validateMon = (mon) => {
  // could be *, one num or several
  if (typeof mon !== typeof {}) throw Error('Bad Arg')
  let msg = ''

  if (mon.type === ASTERISK) {
    return { error: false, msg }
  } else if (mon.type === ONE_NUMBER) {
    // just one number
    const value = mon.value[0]
    if (Number(value) > 12) {
      msg = `Bad Config: Month is required to be less than 13`
      return { error: true, msg }
    }
  } else if (mon.type === SEVERAL_NUMBERS) {
    const values = mon.value
    const badConfig = values.find((item) => {
      if (Number(item) > 12) {
        return item
      }
    })
    console.log('badConfig ::', badConfig)
    console.log('values ::', values)
    if (badConfig) {
      msg = `Bad Config: Month is required to be less than 13`
      return { error: true, msg }
    }
  }
  return { error: false, msg }
}

export const validateDow = (dow) => {
  // could be *, one num or several
  if (typeof dow !== typeof {}) throw Error('Bad Arg')
  let msg = ''

  if (dow.type === ASTERISK) {
    return { error: false, msg }
  } else if (dow.type === ONE_NUMBER) {
    // just one number
    const value = dow.value[0]
    if (Number(value) > 7) {
      msg = `Bad Config: DOW is required to be less than 8`
      return { error: true, msg }
    }
  } else if (dow.type === SEVERAL_NUMBERS) {
    const values = dow.value
    const badConfig = values.find((item) => {
      if (Number(item) > 7) {
        return item
      }
    })
    if (badConfig) {
      msg = `Bad Config: DOW is required to be less than 8`
      return { error: true, msg }
    }
  }
  return { error: false, msg }
}
