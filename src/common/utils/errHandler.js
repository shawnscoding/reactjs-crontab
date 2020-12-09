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
  if (configArr.length === 5 || configArr.length === 6) {
    return { error: false, msg }
  }
  msg = `Bad Config: Five or Six parameters are required in config field`
  return { error: true, msg }
}

export const isEmpty = (configArr) => {
  let msg = ''

  for (let i = 0; i < configArr.length; i++) {
    if (configArr[i] === '') {
      msg = `Bad Config: White space is not allowed in config field`
      return { error: true, msg }
    }
  }

  return { error: false, msg }
}
