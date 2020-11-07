import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { gPrefix } from '../../../common/data/cssPrefix'

const prefix = 'cron-daily-form'

const Indicator = ({ mon, radio: { everyMon } }) => {
  return (
    <div>
      <div>
        <h1>Indicator</h1>
        {everyMon ? <h1>Everyday</h1> : <h1> Whenever {mon.toString()} </h1>}
      </div>
    </div>
  )
}

const MonForm = ({ handleChangeFormat }) => {
  const [mon, setMon] = useState(1)
  const [radio, setRadio] = useState({
    everyMon: true,
    particularMon: false
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
    if (name === 'everyMon') {
      handleChangeFormat('*', 3)
    } else if (name === 'particularMon') {
      handleChangeFormat(mon, 3)
    }
  }

  const onChange = (e) => {
    const value = Number(e.target.value)
    if (value > 12) {
      return
    }

    setMon(value)
    handleChangeFormat(value, 3)
  }

  return (
    <div>
      <div className={`${prefix}`}>
        <h2 className={`${prefix}__header`}>Month</h2>
        <div className={`${prefix}__radiocontainer`}>
          <div className={`${prefix}__radiobox`}>
            <label className={`${gPrefix}-radio__container`}>
              Every month
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.everyMon}
                name='everyMon'
                value='radio'
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              At
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.particularMon}
                name='particularMon'
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
            name='mon'
            value={mon.toString()}
            type='number'
            className={`${prefix}__triggertime__input`}
          />
          <p>Month</p>
          <Indicator radio={radio} mon={mon} />
        </div>
      </div>
    </div>
  )
}

MonForm.propTypes = {}

export default MonForm
