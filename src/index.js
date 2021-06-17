import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import Dashboard from './components/basicCron/dashboard/Dashboard'
import PropTypes from 'prop-types'

const comparisonFn = function (prevProps, nextProps) {
  return true
}

const Crontab = React.memo(({ timeZone, tasks, dashboard }) => {
  const { hidden, route } = dashboard

  tasks = tasks.map((item, i) => {
    if (!item.id) {
      item.id = (i + 1).toString()
      return item
    }
    return item
  })
  // console.log('window.location ::', window.location)

  if (!hidden && route) {
    if (window.location.pathname === route) {
      return (
        <div className={styles.global}>
          <BasicCronProvider timeZone={timeZone} tasks={tasks}>
            <Dashboard />
          </BasicCronProvider>
        </div>
      )
    } else {
      return (
        <div className={styles.global}>
          <BasicCronProvider timeZone={timeZone} tasks={tasks} />
        </div>
      )
    }
  }

  // console.log('[Crontab] rendered')
  if (!hidden)
    return (
      <div className={styles.global}>
        <BasicCronProvider timeZone={timeZone} tasks={tasks}>
          <Dashboard />
        </BasicCronProvider>
      </div>
    )
  return (
    <div className={styles.global}>
      <BasicCronProvider timeZone={timeZone} tasks={tasks} />
    </div>
  )
}, comparisonFn)

Crontab.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      // id: PropTypes.string.isRequired,
      id: PropTypes.string,
      config: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  ),
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool.isRequired
  }),
  timeZone: PropTypes.string.isRequired
}

Crontab.defaultProps = {
  tasks: [],
  dashboard: {
    hidden: false,
    route: undefined
  },
  timeZone: 'UTC'
}

export default Crontab
