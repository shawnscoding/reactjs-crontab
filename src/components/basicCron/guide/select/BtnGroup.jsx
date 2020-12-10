import React from 'react'
import styles from '../../../../styles.module.css'

const BtnGroup = ({ isSelected, handleReset }) => {
  return (
    <div className={styles['btn-group']}>
      <button
        onClick={() => handleReset()}
        className={
          isSelected
            ? styles['btn-group__clear--active']
            : styles['btn-group__clear']
        }
        type='button'
        aria-label='Clear'
        title='Clear'
      >
        <span className={styles['MuiIconButton-label']}>
          <svg
            className={styles['MuiSvgIcon-fontSizeSmall']}
            // focusable='false'
            viewBox='0 0 24 24'
            aria-hidden
          >
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
          </svg>
        </span>
        <span className={styles['MuiTouchRipple-root']} />
      </button>
      <button
        className={styles['dropdown__arrow-icon']}
        type='button'
        aria-label='Open'
        title='Open'
        id={styles['dropdown__arrow-icon--open']}
      >
        <span className={styles['MuiIconButton-label']}>
          <svg
            className={styles['MuiSvgIcon-root']}
            // focusable='false'
            viewBox='0 0 24 24'
            aria-hidden
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
