import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import {
  formatMonth,
  formatMonthInGudie,
  isShouldBeOn
} from '../../../../common/utils/utils'
import BtnGroup from './BtnGroup'
import Checkbox from './Checkbox'

const SelectedDates = ({ mon, handleClickClose }) => {
  const msg = 'Every Month'

  if (mon === '*') {
    return (
      <div className={styles['dropdown__selected-date']}>
        <span className={styles['dropdown__selected-date__placeholder']}>
          {msg}
        </span>
      </div>
    )
  }
  const splitted = mon.split(',')

  const formatted = formatMonthInGudie(splitted)

  const res = formatted.map((item, index) => {
    return (
      <div
        role='button'
        key={index}
        className={styles['dropdown__input-wrapper']}
      >
        <span className={styles['dropdown__selected-date__text']}>
          {item.hrText}
        </span>
        <svg
          onClick={() => handleClickClose({ item, fieldName: 'mon' })}
          className={styles['dropdown__close-icon']}
          focusable={false}
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' />
        </svg>
      </div>
    )
  })
  return <div className={styles['dropdown__selected-date']}>{res}</div>
}

const createArrWithNum = (num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    const iPlusOne = i + 1
    // const val = {
    //   id: iPlusOne.toString(),
    //   value: iPlusOne.toString(),
    //   label: iPlusOne.toString()
    // }
    arr.push(iPlusOne.toString())
  }
  const { value } = formatMonth({ value: arr })
  const res = value.map((item, index) => {
    const iPlusOne = index + 1
    return {
      id: iPlusOne.toString(),
      value: iPlusOne.toString(),
      label: item
    }
  })
  return res
  // 1 - 12
}

const MonDropdown = ({
  handleClear,
  select,
  handleChange,
  handleClickClose
}) => {
  const { mon } = select
  const res = createArrWithNum(12)
  const isDateSelected = mon !== '*'

  return (
    <React.Fragment>
      <div className={styles.dropdown__wrapper}>
        <div className={styles.dropdown}>
          <div className={styles.dropdown__current} tabIndex='1'>
            <input
              type='text'
              value=''
              readOnly
              name='Ben'
              className={styles.dropdown__input}
            />

            <SelectedDates handleClickClose={handleClickClose} mon={mon} />
            <BtnGroup
              fieldName={['mon']}
              handleClear={handleClear}
              isDateSelected={isDateSelected}
            />
          </div>
          <ul className={styles.dropdown__list}>
            {res.map((item) => {
              const isOn = isShouldBeOn(item.value, mon)

              return (
                <li
                  onClick={() => handleChange({ fieldName: 'mon', item })}
                  key={item.id}
                  className={styles['dropdown__list-item']}
                >
                  <div className={styles.dropdown__option}>{item.label}</div>
                  <input
                    value={item.label}
                    readOnly
                    className={
                      isOn
                        ? styles['dropdown__option__input--selected']
                        : styles.dropdown__option__input
                    }
                  />
                  <Checkbox id={item.id} isOn={isOn} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

MonDropdown.propTypes = {}

export default MonDropdown
