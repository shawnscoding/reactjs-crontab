import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'

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
  // 1 - 12
}

const MonSelect = ({ select, handleChange }) => {
  const { mon } = select
  const res = createArrWithNum(12)
  return (
    <div className={styles.select__container}>
      <select defaultValue={mon} onChange={handleChange} id='mon'>
        {res.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

MonSelect.propTypes = {}

export default MonSelect
