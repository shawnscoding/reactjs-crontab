import React from 'react'
import styles from './styles.module.css'

import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import BasicCronTab from './components/basicCron/Index.jsx'

export const BasicCron = ({ tasks }) => {
  // console.log('styles ::', styles.indicator__container)
  return (
    <React.Fragment>
      <BasicCronProvider tasks={tasks}>
        <BasicCronTab />
      </BasicCronProvider>
    </React.Fragment>
  )
}
