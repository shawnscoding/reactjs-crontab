export const getIsOn = (tzValue, itemValue, openOtherTzList) => {
  if (openOtherTzList && itemValue === 'other') {
    return true
  } else if (openOtherTzList) {
    return false
  } else if (tzValue === itemValue) {
    return true
  }
}

export const getDefaultFnsWithSavedSelects = (savedSelects) => {
  let output = ''
  for (let i = 0; i < savedSelects.length; i++) {
    output += `const function_${i + 1} = () => {};
        
    `
  }

  return output
}

const getTaskObj = (select, index) => `
      {
        fn: function_${index + 1},
        id: '${index + 1}',
        config: '${select}',
        name: '',
        description: ''
      }
    `

export const convertSavedSelectsToProps = (savedSelects) => {
  if (savedSelects.length < 1) {
    let output = ''
    output = 'const tasks = ['
    output += ']'
    return output
  }

  const res = savedSelects.map((select, index) => {
    const obj = getTaskObj(select, index)
    let output = ''
    if (index === 0) {
      output = 'const tasks = ['
    }
    output += obj
    if (index === savedSelects.length - 1) {
      output += ']'
    }
    return output
  })
  return res
}

export const getTzVariableText = (value) => {
  let val
  switch (value) {
    case 'default':
      val = `const timeZone = 'UTC'`
      break
    case 'local':
      val = `const timeZone = '${value}'`
      break
    case 'UTC':
      val = `const timeZone = 'UTC'`
      break
    default:
      val = `const timeZone = { set: '${value}' }`
      break
  }
  return val
}
