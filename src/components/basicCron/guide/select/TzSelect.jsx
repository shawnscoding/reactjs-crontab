import React from 'react'
import styles from '../../../../styles.module.css'
import BtnGroup from './BtnGroup'
import Checkbox from '../selectForm/Checkbox'
import SelectCheckbox from './Checkbox'
import { basicTzList, otherTzList } from '../utils/data'
import { getIsOn } from '../utils/helper'

const TzSelect = ({ timeZone, handleChange, handleReset, openOtherTzList }) => {
  const { value, label } = timeZone
  const isSelected = value !== 'default'

  return (
    <React.Fragment>
      <div className={styles['tz-select__container']}>
        <p
          className={
            isSelected
              ? styles['tz-select__label--selected']
              : styles['tz-select__label']
          }
        >
          Time Zone:
        </p>
        <div className={styles.dropdown__wrapper}>
          <div className={styles.dropdown}>
            <div
              className={styles.dropdown__current}
              style={
                isSelected
                  ? {
                      background: '#efefef'
                    }
                  : {}
              }
              tabIndex='1'
            >
              <input
                type='text'
                value=''
                readOnly
                name='Ben'
                className={styles.dropdown__input}
              />
              <div className={styles['dropdown__selected-date']}>
                <p
                  className={
                    isSelected
                      ? styles['select__input-text--selected']
                      : styles['select__input-text']
                  }
                >
                  {label}
                </p>
              </div>
              <BtnGroup handleReset={handleReset} isSelected={isSelected} />
            </div>
            <ul className={styles['tz-select__list']}>
              {basicTzList.map((item) => {
                const isOn = getIsOn(value, item.value, openOtherTzList)

                return (
                  <li
                    onClick={() => handleChange(item)}
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
                    {item.subList ? (
                      <button
                        className={
                          openOtherTzList
                            ? styles['tz-select__arrow-btn--open']
                            : styles['tz-select__arrow-btn']
                        }
                        type='button'
                        aria-label='Open'
                        title='Open'
                      >
                        <span className={styles['MuiIconButton-label']}>
                          <svg
                            className={styles['tz-select__icon-svg']}
                            viewBox='0 0 24 24'
                            aria-hidden
                          >
                            <path d='M7 10l5 5 5-5z' />
                          </svg>
                        </span>
                        <span className={styles['btn-group__btn-foot']} />
                      </button>
                    ) : (
                      <Checkbox id={item.id} isOn={isOn} />
                    )}
                  </li>
                )
              })}
              {openOtherTzList &&
                otherTzList.map((item) => {
                  const isOtherOn = value === item.value

                  return (
                    <li
                      onClick={() => handleChange(item)}
                      key={item.value}
                      className={styles['dropdown__list-item']}
                    >
                      <div className={styles['tz-select__sub-option']}>
                        {item.label}
                      </div>
                      <input
                        value={`- ${item.label}`}
                        readOnly
                        className={
                          isOtherOn
                            ? styles['tz-select__sub-option__input--selected']
                            : styles['tz-select__sub-option__input']
                        }
                      />
                      <SelectCheckbox id={item.id} isOn={isOtherOn} />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

TzSelect.propTypes = {}

export default TzSelect
