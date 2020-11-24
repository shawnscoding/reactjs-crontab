import React from 'react'
import styles from '../../../../styles.module.css'

const BtnGroup = ({ isDateSelected, handleClear, fieldName }) => {
  return (
    <div className={styles['MuiAutocomplete-inputRoot']}>
      <button
        onClick={() => handleClear({ fieldName })}
        className={
          isDateSelected
            ? styles['btn-group__clear--active']
            : styles['btn-group__clear']
        }
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
        <span className={styles['MuiTouchRipple-root']} />
      </button>
      <button
        className={styles['select-box__arrow-icon']}
        tabIndex='-1'
        type='button'
        aria-label='Open'
        title='Open'
        id={styles['select-box__arrow-icon--open']}
      >
        <span className={styles['MuiIconButton-label']}>
          <svg
            className={styles['MuiSvgIcon-root']}
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M7 10l5 5 5-5z' />
          </svg>
        </span>
        <span className={styles['MuiTouchRipple-root']} />
      </button>
    </div>
  )
}

export default BtnGroup