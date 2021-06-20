import {
  validateMin,
  validateHour,
  validateDom,
  validateMon,
  validateDow,
  IsNeededToRunNow
} from './validateTime'
import { converConfigValuesToObject, getCurrentTime } from './utils'

const foramtDow = (dow) => {
  if (dow === 0) {
    return 7
  } else {
    return dow
  }
}

const timerDuration = 60000

const detectTaskTime = (convertedConfigArr, timeZone) => {
  // console.log('timeZone ::', timeZone)
  const now = getCurrentTime(timeZone)

  const currentMin = now.getMinutes()
  const currentHour = now.getHours()
  const currentDom = now.getDate()
  const Mon = now.getMonth() // beware: January = 0; February = 1, etc.
  const Dow = now.getDay()
  const currentMon = Mon + 1
  const currentDow = foramtDow(Dow) // Sunday = 0, Monday = 1, etc.
  // console.log('now ::', now)
  // console.log('now currentMin::', currentMin)
  // console.log('now currentHour::', currentHour)
  // console.log('now currentDom::', currentDom)
  // console.log('now currentMon::', currentMon)
  // console.log('now currentDow::', currentDow)

  const min = convertedConfigArr[0]
  const hour = convertedConfigArr[1]
  const dom = convertedConfigArr[2]
  const mon = convertedConfigArr[3]
  const dow = convertedConfigArr[4]

  const minValidateRes = IsNeededToRunNow(min, currentMin.toString())
  const hourValidateRes = IsNeededToRunNow(hour, currentHour.toString())
  const domValidateRes = IsNeededToRunNow(dom, currentDom.toString())
  const monValidateRes = IsNeededToRunNow(mon, currentMon.toString())
  const dowValidateRes = IsNeededToRunNow(dow, currentDow.toString())

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

export const handleSetTimer = (task, timeZone) => {
  const { config, fn } = task
  const splittedConfig = config.split(' ')

  // console.log('config :::', config)
  // const utcTime = new Date(new Date().toUTCString().slice(0, -3))
  // console.log('utc::', utcTime)

  const isNotAsterisk = splittedConfig
    .slice(0, splittedConfig.length - 1)
    .find((item) => item !== '*')
  if (isNotAsterisk === undefined) {
    // means this is all *
    // console.log('isNotAsterisk ::', isNotAsterisk)

    fn()
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

    // console.log('convertedConfig ::', convertedConfig)

    const minValidateRes = validateMin(convertedConfig[0])

    const hourValidateRes = validateHour(convertedConfig[1])

    const domValidateRes = validateDom(convertedConfig[2])

    const monValidateRes = validateMon(convertedConfig[3])

    const dowValidateRes = validateDow(convertedConfig[4])

    if (minValidateRes.error) return console.error(minValidateRes.msg)
    else if (hourValidateRes.error) return console.error(hourValidateRes.msg)
    else if (domValidateRes.error) return console.error(domValidateRes.msg)
    else if (monValidateRes.error) return console.error(monValidateRes.msg)
    else if (dowValidateRes.error) return console.error(dowValidateRes.msg)

    if (detectTaskTime(convertedConfig, timeZone)) fn()

    setInterval(() => {
      if (detectTaskTime(convertedConfig, timeZone)) fn()
    }, timerDuration)
  }
}
