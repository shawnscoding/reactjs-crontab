import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../styles.module.css'
import {
  formatDOW,
  formatHour,
  formatMonth,
  convertConfigToObj,
  getCurrentTime,
  formatMonthInDashboard
} from '../../../common/utils/utils'
import { ASTERISK } from '../../../common/data/types'

const addHrTime = (tasks) => {
  if (!tasks.length) return []
  const result = tasks.map((task) => {
    // let year = "2020";
    const { config, valid } = task
    if (!valid)
      return {
        id: 'Invalid'
      }
    const splittedConfig = config.split(' ')
    const convertedConfig = splittedConfig.map((item) => {
      const obj = convertConfigToObj(item)
      return obj
    })
    let hrTime = ''

    // const { hour, hourFormat } = formatHour(convertedConfig[1])
    // const inserted = insertZero(splitted)
    // // console.log('inserted ::', inserted)
    const min = convertedConfig[0]
    const hour = convertedConfig[1]
    const dom = convertedConfig[2]
    const mon = formatMonth(convertedConfig[3])

    const dow = formatDOW(convertedConfig[4])

    if (mon.type === ASTERISK) {
      hrTime += 'Every Month'
    } else {
      const arr = mon.value
      hrTime += `In`
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]}`
        } else {
          hrTime += `, ${arr[i]}`
        }
      }
    }

    if (dom.type === ASTERISK) {
      hrTime += ''
    } else {
      const arr = dom.value
      hrTime += ` on`
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]}th`
        } else {
          hrTime += `, ${arr[i]}th`
        }
      }
    }

    if (dow.type === ASTERISK) {
      hrTime += ''
    } else {
      const arr = dow.value
      if (dom.type === ASTERISK) {
        hrTime += ` on`
      } else {
        hrTime += ` and`
      }
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]}`
        } else {
          hrTime += `, ${arr[i]}`
        }
      }
    }

    if (hour.type === ASTERISK) {
      hrTime += ' every hour'
    } else {
      const arr = hour.value
      hrTime += ` At`
      for (let i = 0; i < arr.length; i++) {
        const res = formatHour(arr[i])
        if (i === 0) {
          hrTime += ` ${res}`
        } else {
          hrTime += `, ${res}`
        }
      }
    }

    if (min.type === ASTERISK) {
      hrTime += ' every minute'
    } else {
      const arr = min.value
      if (hour.type !== ASTERISK) {
        hrTime += ` and At`
      } else {
        hrTime += ` At`
      }
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          hrTime += ` ${arr[i]} minute(s)`
        } else {
          hrTime += `, ${arr[i]} minute(s)`
        }
      }
    }

    // // since we have 32 possibilities, we are gonna have 32 if statements
    // const conditions = { min, hour, dom, mon, dow }
    // const res = getHRtime(hrTime, conditions)

    return { ...task, hrTime }
  })

  return result
}

const handleFormatTz = (tz) => {
  if (tz === 'local') {
    return 'LOCAL'
  }
  return tz
}

const Dashboard = ({ tasks, timeZone }) => {
  // console.log('tasks in Dashboard', tasks)
  const now = getCurrentTime(timeZone)

  const currentDom = now.getDate()
  const Mon = now.getMonth() // beware: January = 0; February = 1, etc.
  const currentMon = Mon + 1
  const formattedMonth = formatMonthInDashboard(currentMon.toString())
  const tzText = handleFormatTz(timeZone)

  const crons = addHrTime(tasks)
  // console.log('crons :::')
  return (
    <div className={styles.dashboard}>
      <table className={styles.dashboard__container}>
        <thead className={styles.dashboard__title__container}>
          <tr className={styles.tr}>
            <th colSpan='5' className={styles['dashboard__title-row']}>
              <div className={styles.dashboard__title__box}>
                <span className={styles.dashboard__title}>Dashboard</span>
                <span>
                  {`Today: ${formattedMonth} ${currentDom}th / TZ: ${tzText}`}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Configuration</th>
            <th className={styles.th}>Schedule</th>
          </tr>
        </thead>
        {crons.length &&
          crons.map((cron, index) => {
            if (cron.id === 'Invalid')
              return (
                <tbody key={index}>
                  <tr className={styles.tr}>
                    <td style={{ color: '#dc004e' }} className={styles.td}>
                      {cron.id}
                    </td>
                    <td className={styles.td} />
                    <td className={styles.td} />
                    <td className={styles.td} />
                  </tr>
                </tbody>
              )
            return (
              <tbody key={index}>
                <tr className={styles.tr}>
                  <td className={styles.td}>{cron.id}</td>
                  <td className={styles.td}>{cron.name}</td>
                  <td className={styles.td}>{cron.config}</td>
                  <td className={styles.td}>{`${cron.hrTime} `}</td>
                </tr>
              </tbody>
            )
          })}
      </table>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
