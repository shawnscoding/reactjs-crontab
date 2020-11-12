import React, { useState } from 'react'
import styles from '../../../styles.module.css'
import Form from './form/Form'

// todo
// 1. helper HR text

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
              className={styles.guide__input}
            />
            <div className={styles.guide__divider}>
              <span>OR</span>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Guide.propTypes = {}

export default Guide
