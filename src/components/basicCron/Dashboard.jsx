import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BasicCronContext } from '../../contexts/basic/BasicCronContext'
import styles from '../../styles.module.css'

const formatMonth = (mon) => {
  switch (mon) {
    case '01':
      return 'January'
    case '02':
      return 'Faburary'
    case '03':
      return 'March'
    case '04':
      return 'April'
    case '05':
      return 'May'
    case '06':
      return 'June'
    case '07':
      return 'July'
    case '08':
      return 'Augest'
    case '09':
      return 'September'
    case '10':
      return 'October'
    case '11':
      return 'November'
    case '12':
      return 'December'
    default:
      throw Error('in formatMonth fn')
  }
}

const insertZero = (arr) => {
  console.log('arr ', arr)
  const result = arr.map((item) => {
    if (item.length === 1 && item !== '*') {
      return (item = `0${item}`)
    } else if (item === '*') {
      return item
    } else {
      return item
    }
  })

  console.log('result', result)

  return result
}

const addHrTime = (tasks) => {
  // console.log("res", res);
  if (!tasks.length) return []
  const result = tasks.map((task) => {
    // let convertDateOrder;
    // let year = "2020";
    let hrTime = 'at '
    const { config } = task
    const splitted = config.split('-')
    const inserted = insertZero(splitted)
    const min = inserted[0]
    const hour = inserted[1]
    const dom = inserted[2]
    const mon = inserted[3]

    // convertDateOrder = `${year}-${mon}-${dom}T${hour}:${min}`;

    if (hour === '*') {
      hrTime = hrTime + 'every hour '
    } else {
      hrTime = hrTime + `${hour}:`
    }

    if (min === '*') {
      hrTime = hrTime + 'every minute '
    } else {
      hrTime = hrTime + `${min} `
    }
    if (dom === '*') {
      hrTime = hrTime + 'everyday '
    } else {
      hrTime = hrTime + `${dom}th `
    }

    if (mon === '*') {
      hrTime = hrTime + 'every month '
    } else {
      const month = formatMonth(mon)
      hrTime = hrTime + `${month} `
    }

    return { ...task, hrTime }
  })

  return result
}

const Indicator = (props) => {
  const { tasks } = useContext(BasicCronContext)
  console.log('tasks::', tasks)

  const crons = addHrTime(tasks)
  return (
    <div className={styles['dashboard']}>
      <table className={styles['dashboard__container']}>
        <caption className={styles['dashboard__title__container']}>
          <h1 className={styles['dashboard__title']}>Dashboard</h1>
        </caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Schedule</th>
            <th>Description</th>
          </tr>
        </thead>
        {crons.length &&
          crons.map((cron, index) => (
            <React.Fragment>
              <tbody key={index}>
                <tr>
                  <td>{cron.id}</td>
                  <td>{cron.name}</td>
                  <td>expected to run {cron.hrTime}</td>
                  <td>{cron.description}</td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
      </table>
    </div>
  )
}

Indicator.propTypes = {}

export default Indicator
