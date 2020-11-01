import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { gPrefix } from '../../../common/data/cssPrefix'

const prefix = 'cron-daily-form'

const Indicator = ({ mins, radio: { everySingleMin } }) => {
  return (
    <div>
      <h1>Indicator</h1>
      {everySingleMin ? (
        <h1>Every Minutes</h1>
      ) : (
        <h1>Whenever {mins.toString()} Minutes</h1>
      )}
    </div>
  )
}

const MinForm = ({ handleChangeFormat }) => {
  const [mins, setMins] = useState(1)
  const [radio, setRadio] = useState({
    everySingleMin: true,
    particularMin: false
  })
  const handleChangeRadio = (e) => {
    const name = e.target.name
    for (const key in radio) {
      if (key === name) {
        setRadio((prev) => ({
          ...prev,
          [name]: true
        }))
      } else {
        setRadio((prev) => ({
          ...prev,
          [key]: false
        }))
      }
    }
    if (name === 'everySingleMin') {
      handleChangeFormat('*', 0)
    } else if (name === 'particularMin') {
      handleChangeFormat(mins, 0)
    }
  }

  const onChange = (e) => {
    const value = Number(e.target.value)
    if (value > 59) {
      return
    }

    setMins(value)
    handleChangeFormat(value, 0)
  }

  return (
    <div>
      <div className={`${prefix}`}>
        <h2 className={`${prefix}__header`}>Minutes</h2>
        <div className={`${prefix}__radiocontainer`}>
          <div className={`${prefix}__radiobox`}>
            <label className={`${gPrefix}-radio__container`}>
              Every Minute
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.everySingleMin}
                name='everySingleMin'
                value='radio'
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              At
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.particularMin}
                name='particularMin'
                value='radio'
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
          </div>
        </div>
        <p className={`${prefix}__divider`}></p>
        <div className={`${prefix}__triggertime__box`}>
          <p className={`${prefix}__triggertime__text`}>Every </p>
          <input
            onChange={onChange}
            name='mins'
            value={mins.toString()}
            type='number'
            className={`${prefix}__triggertime__input`}
          />
          <p>Minutes</p>
          <Indicator radio={radio} mins={mins} />
        </div>
      </div>
    </div>
  )
}

MinForm.propTypes = {}

MinForm.defaultProps = {}

export default MinForm
