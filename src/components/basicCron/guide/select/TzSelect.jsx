import React from 'react'
import styles from '../../../../styles.module.css'
import BtnGroup from './BtnGroup'
import Checkbox from '../selectForm/Checkbox'
import tzList from './data'

const TzSelect = ({ timeZone, handleChange, handleReset }) => {
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
            <ul className={styles.dropdown__list}>
              {tzList.map((item) => {
                const isOn = value === item.value

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
                    <Checkbox id={item.id} isOn={isOn} />
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
