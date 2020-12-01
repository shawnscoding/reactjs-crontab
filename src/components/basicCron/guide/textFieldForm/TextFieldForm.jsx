import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import { convertToCronSyntax } from '../../../../common/utils/utils'

// todo
// 1. helper HR text
const TextFieldForm = ({ select, handleChange }) => {
  const value = convertToCronSyntax(select)
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
