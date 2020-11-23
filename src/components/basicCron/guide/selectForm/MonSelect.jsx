import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import { formatMonth, formatMonthInGudie } from '../../../../common/utils/utils'

const classes = {
  listOnClicked: {}
}

const BtnGroup = () => {
  return (
    <div className={styles['MuiAutocomplete-inputRoot']}>
      <button
        className={styles['MuiAutocomplete-clearIndicator']}
        tabIndex='-1'
        type='button'
        aria-label='Clear'
        title='Clear'
      >
        <span className={styles['MuiIconButton-label']}>
          <svg
            className={styles['MuiSvgIcon-fontSizeSmall']}
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
          </svg>
        </span>
        <span className='MuiTouchRipple-root' />
      </button>
      <button
        className='MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator'
        tabIndex='-1'
        type='button'
        aria-label='Open'
        title='Open'
      >
        <span className='MuiIconButton-label'>
          <svg
            className='MuiSvgIcon-root'
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M7 10l5 5 5-5z' />
          </svg>
        </span>
        <span className='MuiTouchRipple-root' />
      </button>
    </div>
  )
}

const isShouldBeOn = (value, mon) => {
  const splitted = mon.split(',')
  console.log('splitted ,', splitted)
  console.log(splitted.length === 1)
  if (mon === '*') {
    return false
  } else if (splitted.length === 1) {
    if (mon === value) {
      return true
    } else {
      return false
    }
  } else if (splitted.length > 1) {
    const found = splitted.find((val) => val === value)
    console.log('found ::', found)
    if (found) {
      return true
    } else {
      return false
    }
  }
}

const Checkbox = ({ isOn }) => {
  return (
    <span className={styles.checkbox__wrapper} aria-disabled='false'>
      <span className={`${isOn ? styles.checkbox__checked : styles.checkbox}`}>
        <input
          className={`${styles.checkbox__input}`}
          type='checkbox'
          value=''
          readOnly
        />
        <svg
          className={`${
            isOn ? styles.checkbox__icon__checked : styles.checkbox__icon
          }`}
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
        </svg>
      </span>
      <span
        className={`${
          isOn ? styles.checkbox__animator__checked : styles.checkbox__animator
        }`}
      />
    </span>
  )
}

const SelectedDates = ({ mon, handleClickClose }) => {
  const msg = 'Every Month'

  if (mon === '*') {
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '-18px',
          left: '1px'
        }}
      >
        <span className={styles['select-box__selected-date__text']}>{msg}</span>
      </div>
    )
  }
  const splitted = mon.split(',')

  const formatted = formatMonthInGudie(splitted)

  console.log('formatted ::', formatted)

  const res = formatted.map((item, index) => {
    return (
      <div
        role='button'
        key={index}
        className={styles['select-box__input-wrapper']}
      >
        <span className={styles['select-box__selected-date__text']}>
          {item.hrText}
        </span>
        <svg
          onClick={() => handleClickClose({ item, fieldName: 'mon' })}
          className={styles['select-box__close-icon']}
          focusable={false}
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' />
        </svg>
      </div>
    )
  })
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: '-18px',
        left: '1px'
      }}
    >
      {res}
    </div>
  )
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

const MonSelect = ({ select, handleChange, handleClickClose }) => {
  const { mon } = select
  const res = createArrWithNum(12)

  return (
    <React.Fragment>
      <BtnGroup />

      <div className={styles['select-box']}>
        <div className={styles['select-box__current']} tabIndex='1'>
          <div className={styles['select-box__value']}>
            <input
              type='text'
              value=''
              readOnly
              name='Ben'
              className={styles['select-box__input']}
            />

            <SelectedDates handleClickClose={handleClickClose} mon={mon} />
            <BtnGroup />
          </div>

          <img
            className={styles['select-box__icon']}
            src='http://cdn.onlinewebfonts.com/svg/img_295694.svg'
            alt='Arrow Icon'
            aria-hidden='true'
          />
        </div>
        <ul className={styles['select-box__list']}>
          {res.map((item) => {
            const isOn = isShouldBeOn(item.value, mon)

            return (
              <li
                onClick={() => handleChange({ fieldName: 'mon', item })}
                key={item.id}
                className={styles['select-box__list-item']}
              >
                <label
                  className={
                    isOn
                      ? styles['select-box__option--selected']
                      : styles['select-box__option']
                  }
                  htmlFor={item.id}
                  aria-hidden='aria-hidden'
                >
                  {item.label}
                </label>
                <Checkbox item={item} handleChange={handleChange} isOn={isOn} />
              </li>
            )
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}

MonSelect.propTypes = {}

export default MonSelect
