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

export const validateFields = (arr) => {
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

export const validateConfig = (configArr) => {
  const min = configArr[0]
  const hour = configArr[1]
  const dom = configArr[2]
  const mon = configArr[3]
  const dow = configArr[4]
  let msg = ''

  if (min !== '*' && Number(min) > 59) {
    msg = `Bad config, minute is required to be less than 60`
    return { error: true, msg }
  }

  if (hour !== '*' && Number(hour) > 23) {
    msg = `Bad config, hour is required to be less than 24`
    return { error: true, msg }
  }

  if (dom !== '*' && Number(dom) > 31) {
    msg = `Bad config, dom is required to be less than 32`
    return { error: true, msg }
  }

  if (mon !== '*' && Number(mon) > 12) {
    msg = `Bad config, month is required to be less than 13`
    return { error: true, msg }
  }

  if (dow !== '*' && Number(dow) > 7) {
    msg = `Bad config, dow is required to be less than 8`
    return { error: true, msg }
  }

  return { error: false, msg }
}
