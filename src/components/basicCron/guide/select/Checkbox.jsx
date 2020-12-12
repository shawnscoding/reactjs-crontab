import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'

const Checkbox = ({ isOn }) => {
  return (
    <span className={styles.checkbox__wrapper} aria-disabled='false'>
      <span
        className={`${
          isOn
            ? styles['tz-sub-select__checkbox--checked']
            : styles['tz-sub-select__checkbox']
        }`}
      >
        <input
          className={`${styles.checkbox__input}`}
          type='checkbox'
          value=''
          readOnly
        />
        <svg
          className={`${
            isOn ? styles['tz-sub-select--checkbox'] : styles['tz-sub-select']
          }`}
          viewBox='0 0 24 24'
          aria-hidden
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

Checkbox.propTypes = {}

export default Checkbox
