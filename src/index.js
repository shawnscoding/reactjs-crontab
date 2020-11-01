import React from 'react'
import styles from './styles.module.css'

import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import BasicCron from './components/basicCron/Index.jsx'

export const BisicCronTab = ({ tasks }) => {
  // console.log('styles ::', styles.indicator__container)
  return (
    <React.Fragment>
      <BasicCronProvider tasks={tasks}>
        <h1>Welcomeee to Periodic task</h1>
        <BasicCron />
      </BasicCronProvider>
    </React.Fragment>
  )
}
