import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'

const convertToCronSyntax = (select) => {
  let res = `*-*-*-*-*`
  const splitted = res.split('-')
  const { min, hour, dow, dom, mon } = select
  if (min !== '*') {
    splitted[0] = min
  }
  if (hour !== '*') {
    splitted[1] = hour
  }
  if (dom !== '*') {
    splitted[2] = dom
  }
  if (mon !== '*') {
    splitted[3] = mon
  }
  if (dow !== '*') {
    splitted[4] = dow
  }

  res = splitted.join('-')

  return res
}

// todo
// 1. helper HR text
const TextFieldForm = ({ select, handleChange }) => {
  const value = convertToCronSyntax(select)
  console.log('value ::', value)
  return (
    <input
      onChange={handleChange}
      type='text'
      value={value}
      className={styles.guide__input}
    />
  )
}

TextFieldForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  select: PropTypes.object.isRequired
}

export default TextFieldForm
