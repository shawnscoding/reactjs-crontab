import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import {
  validateValueTypes,
  validateConfig,
  validateConfigLength,
  validateMin,
  validateHour
} from '../../common/utils/errHandler'
import defaultTasks from '../../common/data/BasicCronDefaultProps'
import { converConfigValuesToObject } from '../../common/utils/utils'

export { BasicCronProvider, BasicCronContext }

const timerDuration = 60000

const detectNecessaryTask = (configArr) => {
  const utcTime = new Date(new Date().toUTCString().slice(0, -3))
  const currentMin = format(utcTime, 'm')
  const currentHour = format(utcTime, 'H')
  const currentDom = format(utcTime, 'd')
  const currentMon = format(utcTime, 'M')
  const currentDow = format(utcTime, 'i')
  // console.log('utc::', utcTime)
  // console.log("m::", currentMin, currentHour, currentDom, currentMon);

  const min = configArr[0]
  const hour = configArr[1]
  const dom = configArr[2]
  const mon = configArr[3]
  const dow = configArr[4]

  if (min !== '*' && min !== currentMin) {
    return { isNecessary: false, col: 'min' }
  }
  if (hour !== '*' && hour !== currentHour) {
    return { isNecessary: false, col: 'hour' }
  }

  if (dom !== '*' && dom !== currentDom) {
    return { isNecessary: false, col: 'dom' }
  }

  if (mon !== '*' && mon !== currentMon) {
    return { isNecessary: false, col: 'mon' }
  }
  if (dow !== '*' && dow !== currentDow) {
    return { isNecessary: false, col: 'dow' }
  }

  if (dom !== '*' && dow !== '*') {
    if (dom !== currentDom || dow !== currentDow) {
      return { isNecessary: false, col: 'dom and dow' }
    }
  }

  return { isNecessary: false, col: null }
}

const handleSetTimer = (task) => {
  const { config } = task
  const splittedConfig = config.split('-')
  const res = validateConfigLength(splittedConfig)
  if (res.error) {
    throw Error(res.msg)
  }

  const isNotAsterisk = splittedConfig
    .slice(0, splittedConfig.length - 1)
    .find((item) => item !== '*')
  if (isNotAsterisk === undefined) {
    // means this is all *
    const { fn } = task
    setInterval(() => {
      fn()
    }, timerDuration)
  } else {
    // means there is something particular
    // validate value in config field
    const { fn } = task

    // const { error, msg } = validateConfig(splittedConfig)
    // console.log('error: ', error)
    // if (error) {
    //   throw Error(msg)
    // }

    const convertedConfig = splittedConfig.map((item) => {
      const obj = converConfigValuesToObject(item)
      return obj
    })

    const minValidateRes = validateMin(convertedConfig[0])

    const hourValidateRes = validateHour(convertedConfig[1])

    console.log('minValidateRes', minValidateRes)
    console.log('hourValidateRes', hourValidateRes)

    //   setInterval(() => {
    //     const { isNecessary } = detectNecessaryTask(splittedConfig)
    //     // console.log('validation res ::', res)
    //     if (isNecessary) {
    //       // console.log('utc::', utcTime)

    //       fn()
    //     } else {
    //       // console.log("not validated task ::", task);
    //     }
    //   }, timerDuration)
    // }
  }
}
const BasicCronContext = createContext(null)

const BasicCronProvider = ({ children, tasks }) => {
  useEffect(() => {
    if (tasks.length) {
      const validatedTasks = validateValueTypes(tasks)

      for (const item of validatedTasks) {
        handleSetTimer(item)
      }
    }
  }, [tasks])

  const store = {
    tasks
  }
  return (
    <BasicCronContext.Provider value={store}>
      {children}
    </BasicCronContext.Provider>
  )
}

BasicCronProvider.propTypes = {
  tasks: PropTypes.array.isRequired
}

BasicCronProvider.defaultProps = {
  tasks: defaultTasks
}
