import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'

// todo
// 1. helper HR text
const TextFieldForm = ({ handleInputChange, format }) => {
  return (
    <input
      type='text'
      onChange={handleInputChange}
      value={format}
      className={styles.guide__input}
    />
  )
}

TextFieldForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  format: PropTypes.string.isRequired
}

export default TextFieldForm
