import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import {
  formatMonth,
  formatDOW,
  converConfigValuesToObject,
  convertToCronSyntax,
  formatHour
} from '../../../../common/utils/utils'
import { ASTERISK } from '../../../../common/data/types'

const getHRtime = (config) => {
  const splittedConfig = config.split('-')
  const convertedConfig = splittedConfig.map((item) => {
    const obj = converConfigValuesToObject(item)
    return obj
  })
  let hrTime = ''

  // const { hour, hourFormat } = formatHour(convertedConfig[1])
  // const inserted = insertZero(splitted)
  // // console.log('inserted ::', inserted)
  const min = convertedConfig[0]
  const hour = convertedConfig[1]
  const dom = convertedConfig[2]
  const mon = formatMonth(convertedConfig[3])

  const dow = formatDOW(convertedConfig[4])

  if (mon.type === ASTERISK) {
    hrTime += 'Every Month'
  } else {
    const arr = mon.value
    hrTime += `In`
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        hrTime += ` ${arr[i]}`
      } else {
        hrTime += `, ${arr[i]}`
      }
    }
  }

  if (dom.type === ASTERISK) {
    hrTime += ''
  } else {
    const arr = dom.value
    hrTime += ` on`
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        hrTime += ` ${arr[i]}th`
      } else {
        hrTime += `, ${arr[i]}th`
      }
    }
  }

  if (dow.type === ASTERISK) {
    hrTime += ''
  } else {
    const arr = dow.value
    if (dom.type === ASTERISK) {
      hrTime += ` on`
    } else {
      hrTime += ` and`
    }
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        hrTime += ` ${arr[i]}`
      } else {
        hrTime += `, ${arr[i]}`
      }
    }
  }

  if (hour.type === ASTERISK) {
    hrTime += ' every hour'
  } else {
    const arr = hour.value
    hrTime += ` At`
    for (let i = 0; i < arr.length; i++) {
      const res = formatHour(arr[i])
      if (i === 0) {
        hrTime += ` ${res}`
      } else {
        hrTime += `, ${res}`
      }
    }
  }

  if (min.type === ASTERISK) {
    hrTime += ' every minute'
  } else {
    const arr = min.value
    if (hour.type !== ASTERISK) {
      hrTime += ` and At`
    } else {
      hrTime += ` At`
    }
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        hrTime += ` ${arr[i]} minute(s)`
      } else {
        hrTime += `, ${arr[i]} minute(s)`
      }
    }
  }

  return { hrTime }
}

const TextFieldForm = ({ select, handleChange }) => {
  const inputEl = useRef(null)
  const value = convertToCronSyntax(select)
  const res = getHRtime(value)
  const isSelected = value !== '*-*-*-*-*'

  const handleCopyText = (e) => {
    const copyText = inputEl.current

    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy')
  }

  return (
    <React.Fragment>
      <div className={styles.guide__input__container}>
        <p
          className={
            isSelected
              ? styles['guide__text-field__label--selected']
              : styles['guide__text-field__label']
          }
        >
          Indicator:
        </p>
        <input
          ref={inputEl}
          onChange={handleChange}
          type='text'
          value={value}
          className={
            isSelected ? styles['guide__input--selected'] : styles.guide__input
          }
        />
        <button
          className={styles['guide__copy-button']}
          type='button'
          onClick={handleCopyText}
        >
          <span>COPY</span>
        </button>
      </div>
      <div className={styles['guide__hr-text__container']}>
        <p
          className={
            isSelected
              ? styles['guide__hr-text__label--selected']
              : styles['guide__hr-text__label']
          }
        >
          Current State:
        </p>
        <p
          className={
            isSelected ? styles['hr-text--selected'] : styles['hr-text']
          }
        >
          Execute: {res.hrTime}
        </p>
      </div>
    </React.Fragment>
  )
}

TextFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  select: PropTypes.object.isRequired
}

export default TextFieldForm
