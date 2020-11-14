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
  // 1 - 31
}

const DOMSelect = ({ select, handleChange }) => {
  const { dom } = select
  const res = createArrWithNum(31)
  return (
    <select defaultValue={dom} onChange={handleChange} id='dom'>
      {res.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

DOMSelect.propTypes = {}

export default DOMSelect
