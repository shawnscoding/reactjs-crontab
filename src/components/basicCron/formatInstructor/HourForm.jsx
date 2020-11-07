import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { gPrefix } from '../../../common/data/cssPrefix'

const prefix = 'cron-daily-form'

const Indicator = ({ hours, radio: { everySingleHour } }) => {
  return (
    <div>
      <h1>Indicator</h1>
      {everySingleHour ? (
        <h1>Every Hour</h1>
      ) : (
        <h1> Whenever {hours.toString()} </h1>
      )}
    </div>
  )
}

const HourForm = ({ handleChangeFormat }) => {
  const [hours, setHours] = useState(0)
  const [radio, setRadio] = useState({
    everySingleHour: true,
    particularHour: false
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
    if (name === 'everySingleHour') {
      handleChangeFormat('*', 1)
    } else if (name === 'particularHour') {
      handleChangeFormat(hours, 1)
    }
  }

  const onChange = (e) => {
    const value = Number(e.target.value)
    if (value > 23) {
      return
    }

    setHours(value)
    handleChangeFormat(value, 1)
  }

  return (
    <div>
      <div className={`${prefix}`}>
        <h2 className={`${prefix}__header`}>Hour</h2>
        <div className={`${prefix}__radiocontainer`}>
          <div className={`${prefix}__radiobox`}>
            <label className={`${gPrefix}-radio__container`}>
              Every Hour
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.everySingleHour}
                name='everySingleHour'
                value='radio'
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              At
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.particularHour}
                name='particularHour'
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
            name='hours'
            value={hours.toString()}
            type='number'
            className={`${prefix}__triggertime__input`}
          />
          <p>hour(s)</p>
          <Indicator radio={radio} hours={hours} />
        </div>
      </div>
    </div>
  )
}

HourForm.propTypes = {}

export default HourForm
