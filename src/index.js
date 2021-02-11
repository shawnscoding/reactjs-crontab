import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import Dashboard from './components/basicCron/dashboard/Dashboard'
import PropTypes from 'prop-types'

const comparisonFn = function (prevProps, nextProps) {
  return true
}

const Crontab = React.memo(({ timeZone, tasks, dashboard }) => {
  const { hidden } = dashboard

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
      id: PropTypes.string.isRequired,
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
    hidden: false
  },
  timeZone: 'UTC'
}

export default Crontab
