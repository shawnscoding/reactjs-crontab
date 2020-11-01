import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BasicCronContext } from '../../contexts/basic/BasicCronContext'
import styles from '../../styles.module.css'
import {
  insertZero,
  formatHour,
  getHRtime,
  formatMonth
} from '../../common/utils/utils'

const addHrTime = (tasks) => {
  // console.log("res", res);
  if (!tasks.length) return []
  const result = tasks.map((task) => {
    // let convertDateOrder;
    // let year = "2020";
    let hrTime = ''
    const { config } = task
    const splitted = config.split('-')
    const inserted = insertZero(splitted)
    const min = inserted[0]
    const { hour, hourFormat } = formatHour(inserted[1])

    const dom = inserted[2]
    const mon = formatMonth(inserted[3])
    const dow = inserted[4]
    // since we have 32 possibilities, we are gonna have 32 if statements
    const conditions = { min, hour, dom, mon, dow }
    const res = getHRtime(hrTime, conditions, hourFormat)

    return { ...task, hrTime: res }
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
            <th>Schedule (HR)</th>
            <th>Description</th>
          </tr>
        </thead>
        {crons.length &&
          crons.map((cron, index) => (
            <tbody key={index}>
              <tr>
                <td>{cron.id}</td>
                <td>{cron.name}</td>
                <td>{cron.config}</td>
                <td>expected to run {cron.hrTime}</td>
                <td>{cron.description}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  )
}

Indicator.propTypes = {}

export default Indicator
