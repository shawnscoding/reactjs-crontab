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
    config: '5-20-18-10-*-utc',
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

const timerDuration = 10000
const utcTime = new Date(new Date().toUTCString().slice(0, -3))

const handleAllAsterisk = (task) => {
  const { fn } = task
  setInterval(() => {
    console.log('utc::', utcTime)
    fn()
  }, timerDuration)
}

console.log('utc::', utcTime)

const validate = (splitted) => {
  const utcTime = new Date(new Date().toUTCString().slice(0, -3))
  // console.log("utc::", utc);
  const currentMin = format(utcTime, 'm')
  const currentHour = format(utcTime, 'H')
  const currentDom = format(utcTime, 'd')
  const currentMon = format(utcTime, 'M')
  // const m = format(utcTime, "m");
  // console.log("utc::", utcTime);
  // console.log("m::", currentMin, currentHour, currentDom, currentMon);

  const min = splitted[0]
  const hour = splitted[1]
  const dom = splitted[2]
  const mon = splitted[3]
  // const dow = splitted[4];
  if (min !== '*' && min !== currentMin) {
    return { error: true, col: 'in' }
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

  return { error: false, col: null }
}

const handleOthers = (splitted, task) => {
  const { fn } = task

  setInterval(() => {
    const res = validate(splitted)
    if (!res.error) {
      console.log('utc::', utcTime)

      fn()
    } else {
      // console.log("not validated task ::", task);
    }
  }, timerDuration)
}

const handleSetTimer = (task) => {
  const { fn, config } = task
  const splitted = config.split('-')
  const notAsterisk = splitted
    .slice(0, splitted.length - 1)
    .find((item) => item !== '*')
  if (!notAsterisk) {
    console.log('all asterisk ::', task)
    handleAllAsterisk(task)
  } else {
    // means there is something particular
    handleOthers(splitted, task)
  }
}

const BasicCronContext = createContext(null)

const BasicCronProvider = ({ children, tasks }) => {
  useEffect(() => {
    if (tasks.length) {
      const validatedTasks = validateFields(tasks)

      console.log('validatedTasks:', validatedTasks)

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
