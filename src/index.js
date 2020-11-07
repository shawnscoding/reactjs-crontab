import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import BasicCronTab from './components/basicCron/Index.jsx'

const BasicCron = ({ tasks }) => {
  // console.log('styles ::', styles.indicator__container)
  return (
    <div className={styles['global']}>
      <BasicCronProvider tasks={tasks}>
        <BasicCronTab />
      </BasicCronProvider>
    </div>
  )
}

export default BasicCron
