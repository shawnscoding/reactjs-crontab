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

const MinSelect = ({ select, handleChange }) => {
  const { min } = select
  const res = createArrWithNum(60)
  return (
    <select defaultValue={min} onChange={handleChange} id='min'>
      {res.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

MinSelect.propTypes = {
  select: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MinSelect
