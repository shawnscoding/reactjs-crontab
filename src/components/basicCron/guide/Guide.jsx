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

  const handleSelectChange = ({ name, item }) => {
    console.log('name', name)
    console.log('item', item)
    const { value } = item

    setSelect((prevState) => {
      const selectedDate = prevState[name]
      if (selectedDate === '*') {
        return {
          ...prevState,
          [name]: value
        }
      } else {
        const dateList = selectedDate.split(',')
        const found = dateList.find((date) => date === value)
        if (found) {
          const res = dateList.filter((date) => date !== found)
          if (!res.length) {
            return {
              ...prevState,
              [name]: '*'
            }
          }
          return {
            ...prevState,
            [name]: res.join()
          }
        } else {
          const res = `${selectedDate},${value}`
          return {
            ...prevState,
            [name]: res
          }
        }
      }
    })
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
