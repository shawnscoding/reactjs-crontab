import React, { useState } from 'react'
import styles from '../../../styles.module.css'
import SelectForm from './selectForm/SelectForm'
import TextFieldForm from './textFieldForm/TextFieldForm'

const Guide = () => {
  const [format, setFormat] = useState('*-*-*-*-*-utc')

  const handleInputChange = (e) => {
    const value = e.target.value
    setFormat(value)
  }

  const [select, setSelect] = useState({
    min: '*',
    hour: '*',
    dom: '*',
    mon: '*',
    dow: '*'
  })

  const handleSelectChange = (e) => {
    const id = e.target.id
    const value = e.target.value

    setSelect((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleClear = () => {
    setFormat('*-*-*-*-*-utc')
  }

  return (
    <React.Fragment>
      <div className={styles.guide}>
        <div className={styles.guide__container}>
          <div className={styles.guide__title__container}>
            <h1 className={styles.guide__title}>Guide</h1>
          </div>
          <div className={styles.guide__content}>
            <TextFieldForm
              format={format}
              handleInputChange={handleInputChange}
            />
            <div className={styles.guide__divider}>
              <span>OR</span>
            </div>
            <SelectForm
              handleClear={handleClear}
              handleChange={handleSelectChange}
              select={select}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Guide.propTypes = {}

export default Guide
