import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const prefix = 'cron-indicator'

const FormatInstructor = ({ format }) => {
  return (
    <div className={`${prefix}__container`}>
      <h1
        style={{
          fontSize: '30px'
        }}
      >
        FormatInstructor
      </h1>
      <p>format: {format}</p>
    </div>
  )
}

FormatInstructor.propTypes = {}

export default FormatInstructor

// —type less than once a day
// utc-o-d-*-10-11-10
// utc-o-d-weekdays-12-00-00
// utc-o-d-weekends-01-00-10

// Utc-o-w-*-fri-20-20-59
// Utc-o-w-*-thi-20-20-29
// Utc-o-w-*-sat-20-00-59

// Utc-o-m-*-10th-20-20-59
// Utc-o-m-*-12th-20-20-29
// Utc-o-m-*-6th-20-00-59

// —type repetitive by period
// utc-rp-d-*-*-every01hour
// utc-rp-d-*-from0900to2300-every10second
// utc-rp-d-weekdays-from0900to2300-every10second
// utc-rp-d-weekends-from0500to1800-every03min

// Utc-rp-w-*-mon-*-every03min
// Utc-rp-w-*-mon-from0900to2300-every03min
// Utc-rp-w-*-teu-from0900to1300-every20second
// Utc-rp-w-*-wen-from0900to1900-every01hour

// Utc-rp-m-*-10th-*-every03min
// Utc-rp-m-*-10th-from0900to1900-every03min
// Utc-rp-m-*-12th-from0900to1900-every03second
// Utc-rp-m-*-6th-from0900to1900-every01hour

// —type repetitive by particular time
// Utc-r-d-*-*-*-*

// after watching unix crontab
// m h dom mon wod timezone commnad
// * * * * * utc
