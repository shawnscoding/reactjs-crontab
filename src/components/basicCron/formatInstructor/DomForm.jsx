import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { gPrefix } from '../../../common/data/cssPrefix'

const prefix = 'cron-daily-form'

const Indicator = ({ dom, radio: { everyday } }) => {
  return (
    <div>
      <h1>Indicator</h1>
      {everyday ? <h1>Everyday</h1> : <h1> Whenever {dom.toString()} </h1>}
    </div>
  )
}

const DomForm = ({ handleChangeFormat }) => {
  const [dom, setDom] = useState(0)
  const [radio, setRadio] = useState({
    everyday: true,
    particularDate: false
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
    if (name === 'everyday') {
      handleChangeFormat('*', 2)
    } else if (name === 'particularDate') {
      handleChangeFormat(dom, 2)
    }
  }

  const onChange = (e) => {
    const value = Number(e.target.value)
    if (value > 31) {
      return
    }

    setDom(value)
    handleChangeFormat(value, 2)
  }

  return (
    <div>
      <div className={`${prefix}`}>
        <h2 className={`${prefix}__header`}>Day of Month</h2>
        <div className={`${prefix}__radiocontainer`}>
          <div className={`${prefix}__radiobox`}>
            <label className={`${gPrefix}-radio__container`}>
              Everyday
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.everyday}
                name='everyday'
                value='radio'
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              At
              <input
                onChange={handleChangeRadio}
                type='radio'
                checked={radio.particularDate}
                name='particularDate'
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
            name='dom'
            value={dom.toString()}
            type='number'
            className={`${prefix}__triggertime__input`}
          />
          <p>Date of Month</p>
          <Indicator radio={radio} dom={dom} />
        </div>
      </div>
    </div>
  )
}

DomForm.propTypes = {}

export default DomForm
