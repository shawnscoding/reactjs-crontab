import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import CronGuide from './components/basicCron/guide/Guide'
import Dashboard from './components/basicCron/dashboard/Dashboard'

export const BasicCron = ({ tasks }) => {
  return (
    <div className={styles.global}>
      <BasicCronProvider tasks={tasks}>
        <Dashboard />
      </BasicCronProvider>
    </div>
  )
}

export const Guide = () => {
  return (
    <div className={styles.global}>
      <CronGuide />
    </div>
  )
}
