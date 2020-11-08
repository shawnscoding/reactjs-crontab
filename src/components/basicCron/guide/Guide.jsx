import React, { useState } from 'react'
import Indicator from './Indicator'
import MinForm from './MinForm'
import HourForm from './HourForm'
import DomForm from './DomForm'
import MonForm from './MonForm'
import DowForm from './DowForm'
import styles from '../../../styles.module.css'

const Guide = () => {
  const [format, setFormat] = useState('*-*-*-*-*-utc')

  const handleInputChange = () => {}

  return (
    <React.Fragment>
      <div className={styles.guide}>
        <div className={styles.guide__container}>
          <div className={styles.guide__title__container}>
            <h1 className={styles.guide__title}>Guide</h1>
          </div>
          <div className={styles.guide__content}>
            <input
              type='text'
              onChange={handleInputChange}
              value={format}
              className={styles.guide_input}
            />
            <div className={styles.divider} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Guide.propTypes = {}

export default Guide
