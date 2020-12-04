import React, { useRef, useState } from 'react'
import styles from '../../../styles.module.css'
import DropdownForm from './selectForm/DropdownForm'
import TextFieldForm from './textFieldForm/TextFieldForm'
import { convertToCronSyntax } from '../../../common/utils/utils'

const getDefaultFnsWithSavedSelects = (savedSelects) => {
  let output = ''
  for (let i = 0; i < savedSelects.length; i++) {
    output += `const function_${i + 1} = () => {};
    
`
  }

  return output
}

const getTaskObj = (select, index) => `
  {
    fn: function_${index + 1},
    id: '${index + 1}',
    config: '${select}',
    name: '',
    description: ''
  }
`

const convertSavedSelectsToProps = (savedSelects) => {
  if (savedSelects.length < 1) {
    let output = ''
    output = 'const tasks = ['
    output += ']'
    return output
  }

  const res = savedSelects.map((select, index) => {
    const obj = getTaskObj(select, index)
    let output = ''
    if (index === 0) {
      output = 'const tasks = ['
    }
    output += obj
    if (index === savedSelects.length - 1) {
      output += ']'
    }
    return output
  })
  return res
}

const Guide = () => {
  const [select, setSelect] = useState({
    min: '*',
    hour: '*',
    dom: '*',
    mon: '*',
    dow: '*',
    tz: 'utc'
  })

  const [savedSelects, setSavedSelects] = useState([])

  const handleSave = () => {
    const res = convertToCronSyntax(select)
    setSavedSelects((prevState) => {
      return [...prevState, res]
    })
  }

  const codeBoxTemplate = `//copy and paste this into your code !
import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

${getDefaultFnsWithSavedSelects(savedSelects)}

${convertSavedSelectsToProps(savedSelects)}

const App = () => {
  return <BasicCron tasks={tasks} />
}

export default App
`

  const handleResetCodeBox = () => {
    setSavedSelects([])
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

  return (
    <div className={styles.guide}>
      <div className={styles.guide__container}>
        <div className={styles.guide__title__container}>
          <h1 className={styles.guide__title}>Cron Guide</h1>
        </div>
        <div className={styles.guide__content}>
          <div className={styles['guide__left-content']}>
            <TextFieldForm handleSave={handleSave} select={select} />
            <div className={styles.guide__divider} />
            <DropdownForm
              handleClickClose={handleClickClose}
              handleClear={handleClear}
              handleChange={handleSelectChange}
              select={select}
            />
          </div>
          <div className={styles.codebox__container}>
            <pre className={styles.codebox}>{codeBoxTemplate}</pre>
            <div className={styles.codebox__btngroup}>
              <button
                className={styles['guide__btn-reset']}
                type='button'
                onClick={handleResetCodeBox}
              >
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Guide.propTypes = {}

export default Guide
