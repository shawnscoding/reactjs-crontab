import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import Guide from './components/basicCron/guide/Guide'
import Dashboard from './components/basicCron/dashboard/Dashboard'
import PropTypes from 'prop-types'
import defaultTasks from './common/data/BasicCronDefaultProps'

export const BasicCron = ({ tasks, dashboard }) => {
  const { hidden } = dashboard
  if (!hidden)
    return (
      <div className={styles.global}>
        <BasicCronProvider tasks={tasks}>
          <Dashboard />
        </BasicCronProvider>
      </div>
    )
  return (
    <div className={styles.global}>
      <BasicCronProvider tasks={tasks} />
    </div>
  )
}

BasicCron.propTypes = {
  tasks: PropTypes.array.isRequired,
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool.isRequired
  })
}

BasicCron.defaultProps = {
  tasks: defaultTasks,
  dashboard: {
    hidden: false
  }
}

export const CronGuide = () => {
  return (
    <div className={styles.global}>
      <Guide />
    </div>
  )
}
