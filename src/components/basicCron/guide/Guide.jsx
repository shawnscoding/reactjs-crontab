import React, { useState } from 'react'
import styles from '../../../styles.module.css'
import DropdownForm from './selectForm/DropdownForm'
import TextFieldForm from './textFieldForm/TextFieldForm'

const Guide = () => {
  const [select, setSelect] = useState({
    min: '*',
    hour: '*',
    dom: '*',
    mon: '*',
    dow: '*',
    tz: 'utc'
  })

  const handleSelectChange = ({ fieldName, item }) => {
    const { value } = item

    setSelect((prevState) => {
      const selectedDate = prevState[fieldName]
      if (selectedDate === '*') {
        return {
          ...prevState,
          [fieldName]: value
        }
      } else {
        const dateList = selectedDate.split(',')
        const found = dateList.find((date) => date === value)
        if (found) {
          const res = dateList.filter((date) => date !== found)
          if (!res.length) {
            return {
              ...prevState,
              [fieldName]: '*'
            }
          }
          return {
            ...prevState,
            [fieldName]: res.join()
          }
        } else {
          const res = `${selectedDate},${value}`
          return {
            ...prevState,
            [fieldName]: res
          }
        }
      }
    })
  }

  const handleClickClose = ({ fieldName, item }) => {
    const { value } = item

    setSelect((prevState) => {
      const selectedDate = prevState[fieldName]
      // can be one or several date
      const dateList = selectedDate.split(',')
      const found = dateList.find((date) => date === value)
      if (found) {
        const res = dateList.filter((date) => date !== found)
        if (!res.length) {
          return {
            ...prevState,
            [fieldName]: '*'
          }
        }
        return {
          ...prevState,
          [fieldName]: res.join()
        }
      }
    })
  }

  const handleClear = ({ fieldName }) => {
    for (const name of fieldName) {
      setSelect((prevState) => {
        return {
          ...prevState,
          [name]: '*'
        }
      })
    }
  }

  return (
    <React.Fragment>
      <div className={styles.guide}>
        <div className={styles.guide__container}>
          <div className={styles.guide__title__container}>
            <h1 className={styles.guide__title}>Cron Guide</h1>
          </div>
          <div className={styles.guide__content}>
            <TextFieldForm select={select} />
            <div className={styles.guide__divider} />
            <DropdownForm
              handleClickClose={handleClickClose}
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
