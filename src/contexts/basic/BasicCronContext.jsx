import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { validateFields } from '../../common/utils/utils'

const testFn_1 = () => {
  console.log('Hello')
}

const testFn_2 = () => {
  console.log('Goodbye')
}

const testFn_3 = () => {
  console.log('Api request has been sent')
}

const testFn_4 = () => {
  console.log('Send Event Notification')
}

const testFn_5 = () => {
  console.log('do something 5')
}

const testFn_6 = () => {
  console.log('do something 6')
}

const defaultTasks = [
  {
    fn: testFn_1,
    id: '1',
    config: '*-*-*-*-*-utc',
    name: 'Alert 1',
    description: 'Say Hello'
  },
  {
    fn: testFn_2,
    id: '2',
    config: '*-*-1-*-7-utc',
    name: 'Alert 2',
    description: 'Say Goodbye'
  },
  {
    fn: testFn_3,
    id: '3',
    config: '6-11-18-10-*-utc',
    name: 'Alert 3',
    description: 'Send API'
  },
  {
    fn: testFn_4,
    id: '4',
    config: '6-*-18-10-*-utc',
    name: 'Alert 4',
    description: 'Send Event Notification'
  },
  {
    fn: testFn_5,
    id: '5',
    config: '*-11-18-10-*-utc',
    name: 'Alert 5'
  },
  {
    fn: testFn_6,
    id: '6',
    config: '11-22-17-10-*-utc'
  }
]

const timerDuration = 6000

const handleAllAsterisks = (task) => {
  const { fn } = task
  setInterval(() => {
    fn()
  }, timerDuration)
}

const detectNecessaryTask = (splitted) => {
  const utcTime = new Date(new Date().toUTCString().slice(0, -3))
  const currentMin = format(utcTime, 'm')
  const currentHour = format(utcTime, 'H')
  const currentDom = format(utcTime, 'd')
  const currentMon = format(utcTime, 'M')
  const currentDow = format(utcTime, 'i')
  // console.log('utc::', utcTime)
  // console.log("m::", currentMin, currentHour, currentDom, currentMon);

  const min = splitted[0]
  const hour = splitted[1]
  const dom = splitted[2]
  const mon = splitted[3]
  const dow = splitted[4]

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
    // console.log('all asterisk ::', task)
    handleAllAsterisks(task)
  } else {
    // means there is something particular
    const { fn } = task

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
