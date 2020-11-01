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
