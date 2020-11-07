import React, { useState } from 'react'
import Indicator from './Indicator'
import MinForm from './MinForm'
import HourForm from './HourForm'
import DomForm from './DomForm'
import MonForm from './MonForm'
import DowForm from './DowForm'

const FormatInstructor = () => {
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
    <React.Fragment>
      {/* <Indicator format={format} />
      <MinForm handleChangeFormat={handleChangeFormat} />
      <HourForm handleChangeFormat={handleChangeFormat} />
      <DomForm handleChangeFormat={handleChangeFormat} />
      <MonForm handleChangeFormat={handleChangeFormat} />
      <DowForm handleChangeFormat={handleChangeFormat} /> */}
    </React.Fragment>
  )
}

FormatInstructor.propTypes = {}

export default FormatInstructor
