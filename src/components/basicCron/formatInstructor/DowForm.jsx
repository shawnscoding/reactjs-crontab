import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { gPrefix } from '../../../common/data/cssPrefix'

const prefix = 'cron-daily-form'

const Indicator = ({ dow, radio: { everyDow } }) => {
  return (
    <div>
      <h1>Indicator</h1>
      {everyDow ? <h1>Everyday</h1> : <h1> Whenever {dow.toString()} </h1>}
    </div>
  )
}

const DowForm = ({ handleChangeFormat }) => {
  const [dow, setDow] = useState(1)
  const [radio, setRadio] = useState({
    everyDow: true,
    particularDow: false
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
    if (name === 'everyDow') {
      handleChangeFormat('*', 4)
    } else if (name === 'particularDow') {
      handleChangeFormat(dow, 4)
    }
  }

  const onChange = (e) => {
    const value = Number(e.target.value)
    if (value > 7) {
      return
    }

    setDow(value)
    handleChangeFormat(value, 4)
  }

  return (
    <div>
      <div className={`${prefix}`}>
        <h2 className={`${prefix}__header`}>Day of week</h2>
        <div className={`${prefix}__radiocontainer`}>
          <div className={`${prefix}__radiobox`}>
            <label className={`${gPrefix}-radio__container`}>
              Every day of week
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.everyDow}
                name='everyDow'
                value='radio'
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              At
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.particularDow}
                name='particularDow'
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
            name='dow'
            value={dow.toString()}
            type='number'
            className={`${prefix}__triggertime__input`}
          />
          <p>Month</p>
          <Indicator radio={radio} dow={dow} />
        </div>
      </div>
    </div>
  )
}

DowForm.propTypes = {}

export default DowForm
