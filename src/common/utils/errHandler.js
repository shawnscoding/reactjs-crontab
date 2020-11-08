import { SEVERAL_NUMBERS, ONE_NUMBER, ASTERISK } from '../data/types'

const handleNoneExistField = (task, keys) => {
  const { id, name, config, description, fn } = keys
  //   is undedined if user didn't specify
  if (!id || !config || !fn) {
    throw Error('Id, Config, Fn are required fields in tasks props')
  }
  if (!name) {
    task.name = '*'
  }
  if (!description) {
    task.description = '*'
  }
  return task
}

const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}

export const validateValueTypes = (arr) => {
  return arr.map((task) => {
    const keysInObj = {}

    for (const key in task) {
      // throw error if value is not string
      if (key === 'fn') {
        const isfn = isFunction(task[key])
        console.log('key::', key)
        console.log('isFn::', isfn)
        if (!isfn) {
          throw Error('Type error in fn field')
        }
      } else if (typeof task[key] === typeof '') {
        // console.log(`field of ${key} is string`)
      } else {
        throw Error(`Type error in ${key} field`)
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

export const validateConfigLength = (configArr) => {
  let msg = ''
  if (configArr.length !== 6) {
    msg = `Bad Config: Six parameters are required in config field`
    return { error: true, msg }
  }
  return { error: false, msg }
}

export const validateMin = (min) => {
  // could be *, one num or several
  if (typeof min !== typeof {}) throw Error('Bad props')
  let msg = ''
  console.log('min validateMin ::', min)

  if (min.type === ASTERISK) {
    return { error: false, msg }
  } else if (min.type === ONE_NUMBER) {
    // just one number
    const value = min.value
    if (Number(value) > 59) {
      msg = `Bad Config: minute is required to be less than 60`
      return { error: true, msg }
    }
  } else if (min.type === SEVERAL_NUMBERS) {
    const values = min.value
    const badConfig = values.find((item) => {
      console.log('Number(min) :::', Number(item))
      if (Number(item) > 59) {
        return item
      }
    })
    console.log('badConfig ::', badConfig)
    if (badConfig) {
      msg = `Bad Config: minute is required to be less than 60`
      return { error: true, msg }
    }
  }
  return { error: false, msg }
}

export const validateHour = (hour) => {
  // could be *, one num or several
  if (typeof hour !== typeof {}) throw Error('Bad props')
  let msg = ''
  if (hour.type === ASTERISK) {
    return { error: false, msg }
  } else if (hour.type === ONE_NUMBER) {
    // just one number
    if (Number(hour) > 23) {
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

export const validateConfig = (configArr) => {
  let msg = ''

  const min = configArr[0]
  const hour = configArr[1]
  const dom = configArr[2]
  const mon = configArr[3]
  const dow = configArr[4]

  if (min !== '*' && Number(min) > 59) {
    msg = `Bad Config: minute is required to be less than 60`
    return { error: true, msg }
  }

  if (hour !== '*' && Number(hour) > 23) {
    msg = `Bad Config: hour is required to be less than 24`
    return { error: true, msg }
  }

  if (dom !== '*' && Number(dom) > 31) {
    msg = `Bad Config: dom is required to be less than 32`
    return { error: true, msg }
  }

  if (mon !== '*' && Number(mon) > 12) {
    msg = `Bad Config: month is required to be less than 13`
    return { error: true, msg }
  }

  if (dow !== '*' && Number(dow) > 7) {
    msg = `Bad Config: dow is required to be less than 8`
    return { error: true, msg }
  }

  return { error: false, msg }
}
