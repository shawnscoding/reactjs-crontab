import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { validateFields } from '../../common/utils/utils'

const sayHello = () => {
  console.log('Hello')
}

const sayGoobye = () => {
  console.log('Goodbye')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

const sendNotification = () => {
  console.log('Send Event Notification')
}

const logUserOut = () => {
  console.log('log user out')
}

// these are the functions which will run according to your settings

const defaultTasks = [
  // tasks props should be array
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*-utc',
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '15-30-*-*-*-utc',
    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '15-*-*-*-*-utc',
    name: 'Request Something',
    description: 'Send API'
  },
  {
    fn: sendNotification,
    id: '4',
    config: '10-11-18-3-*-utc',
    name: 'Send Notification',
    description: 'Send Event Notification'
  },
  {
    fn: logUserOut,
    id: '5',
    config: '*-16-18-10-*-utc',
    name: 'Log user out'
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
