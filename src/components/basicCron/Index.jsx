import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dashboard from './Dashboard'
import FormatInstructor from './FormatInstructor'
import MinForm from './config/MinForm'
import HourForm from './config/HourForm'
import DomForm from './config/DomForm'
import MonForm from './config/MonForm'
import DowForm from './config/DowForm'

// const prefix = 'cron-basic'
// const gPrefix = 'cron'

const BasicCron = () => {
  const [format, setFormat] = useState('*-*-*-*-*-utc')

  const handleChangeFormat = (time, index) => {
    if (time === null || time === undefined) throw Error('something went wrong')
    if (time === '*') {
      const splitted = format.split('-')
      splitted[index] = '*'
      const catted = splitted.join('-')
      setFormat(catted)
    } else {
      const splitted = format.split('-')
      splitted[index] = time.toString()
      const catted = splitted.join('-')
      setFormat(catted)
    }
  }

  return (
    <div>
      {/* <FormatInstructor format={format} />
      <MinForm handleChangeFormat={handleChangeFormat} />
      <HourForm handleChangeFormat={handleChangeFormat} />
      <DomForm handleChangeFormat={handleChangeFormat} />
      <MonForm handleChangeFormat={handleChangeFormat} />
      <DowForm handleChangeFormat={handleChangeFormat} /> */}
      <Dashboard />
    </div>
  )
}

BasicCron.propTypes = {}

BasicCron.defaultProps = {}

export default BasicCron
