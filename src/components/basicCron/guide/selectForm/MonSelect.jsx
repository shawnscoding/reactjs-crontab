import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'

const Test = () => {
  return (
    <div className=''>
      <button className='' type='button' title='Clear'>
        <span className=''>
          <svg className=''>
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

const createArrWithNum = (num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    const iPlusOne = i + 1
    const val = {
      id: iPlusOne.toString(),
      value: iPlusOne.toString(),
      label: iPlusOne.toString()
    }
    arr.push(val)
  }

  return arr
  // 1 - 12
}

const MonSelect = ({ select, handleChange }) => {
  const { mon } = select
  const res = createArrWithNum(12)
  return (
    <React.Fragment>
      <div className={styles.checkboxes__combobox}>
        <div className={styles.checkboxes__wrapper}>
          <label className={styles.checkboxes__label}>Checkboxes</label>

          <div
            className={`${styles.checkboxes__container} ${styles['MuiInputBase-root']} ${styles['MuiOutlinedInput-root']}`}
          >
            <input
              className={`${styles.checkboxes__input} ${styles['MuiInputBase-input']}`}
              type='text'
            />
            <Test />
            <fieldset
              className={`${styles['MuiInputBase-root']}`}
              aria-hidden='true'
            >
              <legend className={`${styles['MuiInputBase-root']}`}>
                <span className={styles['checkboxes__label--focus']}>
                  Checkboxes
                </span>
              </legend>
            </fieldset>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

MonSelect.propTypes = {}

export default MonSelect
