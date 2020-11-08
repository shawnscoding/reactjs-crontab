import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { validateFields, validateConfig } from '../../common/utils/errHandler'
import defaultTasks from '../../common/data/BasicCronDefaultProps'

const timerDuration = 6000

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
    return { error: true, col: 'min' }
  }
  if (hour !== '*' && hour !== currentHour) {
    return { error: true, col: 'hour' }
  }

  if (dom !== '*' && dom !== currentDom) {
    return { error: true, col: 'dom' }
  }

  if (mon !== '*' && mon !== currentMon) {
    return { error: true, col: 'mon' }
  }
  if (dow !== '*' && dow !== currentDow) {
    return { error: true, col: 'dow' }
  }

  if (dom !== '*' && dow !== '*') {
    if (dom !== currentDom || dow !== currentDow) {
      return { error: true, col: 'dom and dow' }
    }
  }

  return { error: false, col: null }
}

const handleSetTimer = (task) => {
  const { config } = task
  const splitted = config.split('-')
  const notAsterisk = splitted
    .slice(0, splitted.length - 1)
    .find((item) => item !== '*')
  if (!notAsterisk) {
    const { fn } = task
    setInterval(() => {
      fn()
    }, timerDuration)
  } else {
    // means there is something particular
    // validate value in config field
    const { fn } = task
    const { error, msg } = validateConfig(splitted)
    if (error) {
      throw Error(msg)
    }

    setInterval(() => {
      const res = detectNecessaryTask(splitted)
      // console.log('validation res ::', res)
      if (!res.error) {
        // console.log('utc::', utcTime)

        fn()
      } else {
        // console.log("not validated task ::", task);
      }
    }, timerDuration)
  }
}

const BasicCronContext = createContext(null)

const BasicCronProvider = ({ children, tasks }) => {
  useEffect(() => {
    if (tasks.length) {
      const validatedTasks = validateFields(tasks)

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

export { BasicCronProvider, BasicCronContext }
