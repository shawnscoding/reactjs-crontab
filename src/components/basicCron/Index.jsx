import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dashboard from './Dashboard'
import FormatInstructor from './formatInstructor/FormatInstructor'



const BasicCron = () => {
 

  return (
    <div>
      <FormatInstructor  />

      <Dashboard />
    </div>
  )
}

BasicCron.propTypes = {}

BasicCron.defaultProps = {}

export default BasicCron
