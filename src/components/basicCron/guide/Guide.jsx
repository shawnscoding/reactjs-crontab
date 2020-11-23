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

  const handleSelectChange = ({ fieldName, item }) => {
    const { value } = item
    console.log('handleSelectChange called')

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

  const handleCheckboxChange = ({ name, item }) => {
    const { value } = item
    console.log('handleCheckboxChange called')

    const selectedDate = select[name]

    if (selectedDate === '*') {
      setSelect({
        ...select,
        [name]: value
      })
    }
    // setSelect((prevState) => {
    //   const selectedDate = prevState[name]
    //   if (selectedDate === '*') {
    //     console.log('name', name)
    //     console.log('value', value)
    //     console.log('selectedDate', selectedDate)
    //     return {
    //       ...prevState,
    //       [name]: value
    //     }
    //   } else {
    //     const dateList = selectedDate.split(',')
    //     const found = dateList.find((date) => date === value)
    //     if (found) {
    //       const res = dateList.filter((date) => date !== found)
    //       if (!res.length) {
    //         return {
    //           ...prevState,
    //           [name]: '*'
    //         }
    //       }
    //       return {
    //         ...prevState,
    //         [name]: res.join()
    //       }
    //     } else {
    //       const res = `${selectedDate},${value}`
    //       return {
    //         ...prevState,
    //         [name]: res
    //       }
    //     }
    //   }
    // })
  }

  const handleClickClose = ({ fieldName, item }) => {
    const { value } = item
    console.log('val ::', value)
    console.log('fieldName ::', fieldName)

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
