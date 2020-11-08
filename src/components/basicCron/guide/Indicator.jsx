import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const prefix = 'cron-indicator'

const Indicator = ({ format }) => {
  return (
    <div className={`${prefix}__container`}>
      <h1
        style={{
          fontSize: '30px'
        }}
      >
        Format Instructor
      </h1>
      <p>format: {format}</p>
    </div>
  )
}

Indicator.propTypes = {}

export default Indicator