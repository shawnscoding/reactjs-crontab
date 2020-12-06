import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import MinDropdown from './MinDropdown'
import MonDropdown from './MonDropdown'
import DOMDropdown from './DOMDropdown'
import DOWDropdown from './DOWDropdown'
import HourDropdown from './HourDropdown'
import { convertToCronSyntax } from '../../../../common/utils/utils'

const DropdownForm = ({
  handleClear,
  handleClickClose,
  handleChange,
  select
}) => {
  const handleAllClear = () => {
    const fieldName = ['mon', 'dow', 'dom', 'hour', 'min']
    handleClear({ fieldName })
  }

  const res = convertToCronSyntax(select)
  const splitted = res.split('-')
  const min = splitted[0] !== '*'
  const hour = splitted[1] !== '*'
  const dom = splitted[2] !== '*'
  const mon = splitted[3] !== '*'
  const dow = splitted[4] !== '*'

  return (
    <form>
      <div className={styles.dropdowns__wrapper}>
        <div className={styles.dropdown__container}>
          <div className={styles['guide__helper-text-box']}>
            <span
              className={
                mon
                  ? styles['guide__helper-text--selected']
                  : styles['guide__helper-text']
              }
            >
              IN
            </span>
          </div>
          <MonDropdown
            handleClear={handleClear}
            select={select}
            handleChange={handleChange}
            handleClickClose={handleClickClose}
          />
        </div>
        <div className={styles.dropdown__container}>
          <div className={styles['guide__helper-text-box']}>
            <span
              className={
                dom
                  ? styles['guide__helper-text--selected']
                  : styles['guide__helper-text']
              }
            >
              ON
            </span>
          </div>

          <DOMDropdown
            handleClear={handleClear}
            handleClickClose={handleClickClose}
            select={select}
            handleChange={handleChange}
          />
        </div>

        <div className={styles.dropdown__container}>
          <div className={styles['guide__helper-text-box']}>
            <span
              className={
                dow
                  ? styles['guide__helper-text--selected']
                  : styles['guide__helper-text']
              }
            >
              ON
            </span>
          </div>

          <DOWDropdown
            handleClear={handleClear}
            handleClickClose={handleClickClose}
            select={select}
            handleChange={handleChange}
          />
        </div>
        <div className={styles.dropdown__container}>
          <div className={styles['guide__helper-text-box']}>
            <span
              className={
                hour
                  ? styles['guide__helper-text--selected']
                  : styles['guide__helper-text']
              }
            >
              AT
            </span>
          </div>

          <HourDropdown
            handleClear={handleClear}
            handleClickClose={handleClickClose}
            select={select}
            handleChange={handleChange}
          />
        </div>
        <div className={styles.dropdown__container}>
          <div className={styles['guide__helper-text-box']}>
            <span
              className={
                min
                  ? styles['guide__helper-text--selected']
                  : styles['guide__helper-text']
              }
            >
              :
            </span>
          </div>

          <MinDropdown
            handleClear={handleClear}
            handleClickClose={handleClickClose}
            select={select}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className={styles['guide__clear-button__wrapper']}>
        <button
          className={styles['guide__btn--clear']}
          title='Clear'
          type='button'
          onClick={handleAllClear}
        >
          <span>Reset</span>
        </button>
      </div>
    </form>
  )
}

DropdownForm.propTypes = {
  handleClear: PropTypes.func.isRequired
}

export default DropdownForm
