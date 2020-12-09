import React, { useState } from 'react'
import styles from '../../../styles.module.css'
import DropdownForm from './selectForm/DropdownForm'
import TextFieldForm from './textFieldForm/TextFieldForm'
import { convertToCronSyntax } from '../../../common/utils/utils'
import Codebox from './codebox/Codebox'

const Guide = () => {
  const [select, setSelect] = useState({
    min: '*',
    hour: '*',
    dom: '*',
    mon: '*',
    dow: '*'
  })
  const [timeZone, setTimeZone] = useState('utc')

  const [savedSelects, setSavedSelects] = useState([])

  const handleSave = () => {
    const res = convertToCronSyntax(select)
    setSavedSelects((prevState) => {
      return [...prevState, res]
    })
  }

  const handleResetCodeBox = () => {
    setSavedSelects([])
  }

  const handleTzChange = (e) => {
    const value = e.target
    setTimeZone(value)
  }

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
  console.log('hi')

  return (
    <div className={styles.guide}>
      <div className={styles.guide__container}>
        <div className={styles.guide__title__container}>
          <h1 className={styles.guide__title}>Cron Guide</h1>
        </div>
        <div className={styles.guide__content}>
          <div className={styles['guide__left-content']}>
            <TextFieldForm
              timeZone={timeZone}
              handleSave={handleSave}
              select={select}
            />
            <div className={styles.guide__divider} />
            <DropdownForm
              handleClickClose={handleClickClose}
              handleClear={handleClear}
              handleChange={handleSelectChange}
              select={select}
              handleTzChange={handleTzChange}
            />
          </div>
          <Codebox
            savedSelects={savedSelects}
            handleResetCodeBox={handleResetCodeBox}
          />
        </div>
      </div>
    </div>
  )
}

Guide.propTypes = {}

export default Guide
