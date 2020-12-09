import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import Guide from './components/basicCron/guide/Guide'
import Dashboard from './components/basicCron/dashboard/Dashboard'

export const BasicCron = ({ tasks, timeZone }) => {
  return (
    <div className={styles.global}>
      <BasicCronProvider tasks={tasks} timeZone={timeZone}>
        <Dashboard />
      </BasicCronProvider>
    </div>
  )
}

export const CronGuide = () => {
  return (
    <div className={styles.global}>
      <Guide />
    </div>
  )
}
