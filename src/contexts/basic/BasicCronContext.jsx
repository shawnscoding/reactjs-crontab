import React, { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import {
  validateValueTypes,
  validateConfigLength
} from '../../common/utils/errHandler'
import {
  validateMin,
  validateHour,
  validateDom,
  validateMon,
  validateDow,
  IsNeededToRunNow
} from '../../common/utils/validateTime'
import defaultTasks from '../../common/data/BasicCronDefaultProps'
import { converConfigValuesToObject } from '../../common/utils/utils'

export { BasicCronProvider, BasicCronContext }

const timerDuration = 3000

const detectTaskTime = (convertedConfigArr) => {
  const utcTime = new Date(new Date().toUTCString().slice(0, -3))

  const currentMin = format(utcTime, 'm')
  const currentHour = format(utcTime, 'H')
  const currentDom = format(utcTime, 'd')
  const currentMon = format(utcTime, 'M')
  const currentDow = format(utcTime, 'i')
  console.log('m::', currentMin, currentHour, currentDom, currentMon)

  const min = convertedConfigArr[0]
  const hour = convertedConfigArr[1]
  const dom = convertedConfigArr[2]
  const mon = convertedConfigArr[3]
  const dow = convertedConfigArr[4]

  const minValidateRes = IsNeededToRunNow(min, currentMin)
  const hourValidateRes = IsNeededToRunNow(hour, currentHour)
  const domValidateRes = IsNeededToRunNow(dom, currentDom)
  const monValidateRes = IsNeededToRunNow(mon, currentMon)
  const dowValidateRes = IsNeededToRunNow(dow, currentDow)

  if (!minValidateRes.isNeededToRun) {
    return minValidateRes.isNeededToRun
  }
  if (!hourValidateRes.isNeededToRun) {
    return hourValidateRes.isNeededToRun
  }
  if (!domValidateRes.isNeededToRun) {
    return domValidateRes.isNeededToRun
  }
  if (!monValidateRes.isNeededToRun) {
    return monValidateRes.isNeededToRun
  }
  if (!dowValidateRes.isNeededToRun) {
    return dowValidateRes.isNeededToRun
  }

  // console.log('minValidateRes ::', minValidateRes.isNeededToRun)

  // console.log('hourValidateRes ::', hourValidateRes.isNeededToRun)
  // console.log('domValidateRes ::', domValidateRes.isNeededToRun)

  // console.log('monValidateRes ::', monValidateRes.isNeededToRun)

  // console.log('dowValidateRes ::', dowValidateRes.isNeededToRun)

  return true
}

const handleSetTimer = (task) => {
  const { config } = task
  const splittedConfig = config.split('-')
  const res = validateConfigLength(splittedConfig)
  if (res.error) {
    throw Error(res.msg)
  }

  console.log('config :::', config)
  const utcTime = new Date(new Date().toUTCString().slice(0, -3))
  console.log('utc::', utcTime)

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
    const convertedConfig = splittedConfig.map((item) => {
      const obj = converConfigValuesToObject(item)
      return obj
    })

    const minValidateRes = validateMin(convertedConfig[0])

    const hourValidateRes = validateHour(convertedConfig[1])

    const domValidateRes = validateDom(convertedConfig[2])

    const monValidateRes = validateMon(convertedConfig[3])

    const dowValidateRes = validateDow(convertedConfig[4])

    if (minValidateRes.error) {
      const { msg } = minValidateRes
      throw Error(msg)
    } else if (hourValidateRes.error) {
      const { msg } = hourValidateRes
      throw Error(msg)
    } else if (domValidateRes.error) {
      const { msg } = domValidateRes
      throw Error(msg)
    } else if (monValidateRes.error) {
      const { msg } = monValidateRes
      throw Error(msg)
    } else if (dowValidateRes.error) {
      const { msg } = dowValidateRes
      throw Error(msg)
    }

    const { fn } = task

    setInterval(() => {
      const isNeededToRun = detectTaskTime(convertedConfig)
      if (isNeededToRun) {
        fn()
      }
    }, timerDuration)
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
