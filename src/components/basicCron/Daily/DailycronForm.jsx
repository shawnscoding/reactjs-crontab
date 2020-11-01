import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { gPrefix } from '../../../common/data/cssPrefix'

const prefix = 'cron-daily-form'

const DailycronForm = () => {
  const [when, setWhen] = useState({
    onlyWeekend: false,
    onlyWeekday: false,
    everyday: true
  })

  const [triggertime, setTriggertime] = useState({
    hours: 0,
    mins: 0,
    seconds: 0
  })

  const handleChange = (e) => {
    const name = e.target.name
    const valueStr = e.target.value
    const value = Number(valueStr)
    // console.log(valueStr);

    // if len is longer than 2, set 0
    if (valueStr.length > 2 || valueStr.includes('.')) {
      return
    }
    if (name === 'hours') {
      if (value > 23) {
        return
      }
    } else if (name === 'mins' || name === 'seconds') {
      if (value > 59) {
        return
      }
    }

    setTriggertime({
      ...triggertime,
      [name]: value
    })
  }

  const handleSelectHmDays = (e) => {
    const name = e.target.name
    for (const key in when) {
      const keyStr = key.toString()
      if (keyStr === name) {
        setWhen((prev) => ({
          ...prev,
          [name]: true
        }))
      } else {
        setWhen((prev) => ({
          ...prev,
          [key]: false
        }))
      }
    }
    // setWhen((prev) => ({
    //     ...prev,
    //     [e.target.name]: prev
    //   }));
  }

  //   const detectStates = () => {

  //   };

  const { onlyWeekday, onlyWeekend, everyday } = when

  const { hours, mins, seconds } = triggertime

  return (
    <div>
      <div className={`${prefix}`}>
        <h2 className={`${prefix}__header`}>Minutes</h2>
        {/* <div className={`${prefix}__radiocontainer`}> */}
        {/* <div className={`${prefix}__radiobox`}>
            <label className={`${gPrefix}-radio__container`}>
              Every day
              <input
                onChange={handleSelectHmDays}
                type="radio"
                checked={everyday}
                name="everyday"
                value="radio"
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              Every weekdays
              <input
                onChange={handleSelectHmDays}
                type="radio"
                checked={onlyWeekday}
                name="onlyWeekday"
                value="radio"
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
            <label className={`${gPrefix}-radio__container`}>
              Every weekends
              <input
                onChange={handleSelectHmDays}
                type="radio"
                checked={onlyWeekend}
                value="radio"
                name="onlyWeekend"
              />
              <span className={`${gPrefix}-radio__checkmark`}></span>
            </label>
          </div>
        </div> */}
        <p className={`${prefix}__divider`}></p>
        <div className={`${prefix}__triggertime__box`}>
          <p className={`${prefix}__triggertime__text`}>Every </p>
          <input
            onChange={handleChange}
            name='mins'
            value={Number(hours).toString()}
            type='number'
            className={`${prefix}__triggertime__input`}
          />
          <p>Minutes</p>
          {/* <button onClick={handleSubmit}>Submit</button> */}
        </div>
      </div>
    </div>
  )
}

DailycronForm.propTypes = {}

DailycronForm.defaultProps = {}

export default DailycronForm
