const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}

export const validateValueTypes = (task) => {
  if (task.fn === undefined) {
    task.valid = false
    console.error('Invalid, fn field is required')
    task.config = 'Invalid, fn field is required'
    return task
  }
  if (task.config === undefined) {
    task.valid = false
    console.error('Invalid, config field is required')
    task.config = 'Invalid, config field is required'
    return task
  }
  for (const key in task) {
    // console error if value is not string
    if (key === 'fn' && !isFunction(task[key])) {
      console.error('Type error in fn field')
      task.valid = false
      task.config = 'Invalid, Type Function is required in fn field'
      return task
    } else if (typeof task[key] !== typeof '') {
      console.log(`Invalid, Type String is required in ${key} field `)
      task.valid = true
      task[key] = `Invalid, Type String is required in ${key} field `
    }
    // find out how many and what field it contains
  }

  return task
  // handle  nonexistent field
}

export const validateConfigLength = (configArr) => {
  let msg = ''
  if (configArr.length === 5) {
    return { error: false, msg }
  }
  const leng = configArr.length
  msg = `Bad format: Five values are required in config field but received ${leng.toString()}`
  return { error: true, msg }
}

export const isEmpty = (configArr) => {
  let msg = ''

  for (let i = 0; i < configArr.length; i++) {
    if (configArr[i] === '') {
      msg = `Bad Config: Unnecessary white space`
      return { error: true, msg }
    }
  }

  return { error: false, msg }
}
