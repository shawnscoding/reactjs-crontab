const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}

export const validateValueTypes = (task) => {
  if (task.fn === undefined) {
    task.valid = false
    console.error('Invalid, fn field is required')
    // task.config = 'Invalid, fn field is required'
    return task
  }
  if (task.config === undefined) {
    task.valid = false
    console.error('Invalid, config field is required')
    // task.config = 'Invalid, config field is required'
    return task
  }
  for (const key in task) {
    // console error if value is not string
    if (key === 'fn' && !isFunction(task[key])) {
      console.error('Type error in fn field')
      task.valid = false
      // task.config = 'Invalid, Type Function is required in fn field'
      return task
    } else if (key !== 'fn' && typeof task[key] !== typeof '') {
      console.error(`Invalid, Type String is required in ${key} field `)
      // task[key] = `Invalid, Type String is required in ${key} field `
    }
    // find out how many and what field it contains
  }
  const { config } = task
  const splitted = config.split(' ')
  if (!validateConfigLength(splitted)) {
    task.valid = false
    return task
  }
  if (isRedundantSpace(splitted)) {
    task.valid = false
    return task
  }

  task.valid = true
  return task
  // handle  nonexistent field
}

const validateConfigLength = (configArr) => {
  if (configArr.length !== 5) {
    console.error(
      `Bad format: Five values are required in config field but received ${configArr.length.toString()}`
    )
    return false
  }
  return true
}
// 1 2 3 4,2 1, 5
const isRedundantSpace = (configArr) => {
  for (let i = 0; i < configArr.length; i++) {
    if (configArr[i] === '') {
      console.error(`Bad Config: Unnecessary white space`)
      return true
    }
  }
  return false
}
