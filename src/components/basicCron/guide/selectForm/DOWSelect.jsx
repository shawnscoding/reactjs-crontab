import React from 'react'
import PropTypes from 'prop-types'

const createArrWithNum = (num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    const iPlusOne = i + 1
    const val = {
      id: iPlusOne.toString(),
      value: iPlusOne.toString(),
      label: iPlusOne.toString()
    }
    arr.push(val)
  }

  return arr
  // 1 - 7
}

const DOWSelect = ({ select, handleChange }) => {
  const { dow } = select
  const res = createArrWithNum(7)
  return (
    <select defaultValue={dow} onChange={handleChange} id='dow'>
      {res.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

DOWSelect.propTypes = {}

export default DOWSelect
