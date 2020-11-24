import React from 'react'
import PropTypes from 'prop-types'

const createArrWithNum = (num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    const val = { id: i.toString(), value: i.toString(), label: i.toString() }
    arr.push(val)
  }

  return arr
  // 0 - 59
}

const HourSelect = ({ select, handleChange }) => {
  const { hour } = select
  const res = createArrWithNum(24)
  return (
    <select defaultValue={hour} onChange={handleChange} id='hour'>
      {res.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

HourSelect.propTypes = {}

export default HourSelect
