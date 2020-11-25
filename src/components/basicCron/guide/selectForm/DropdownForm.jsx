import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import MinDropdown from './MinDropdown'
import MonDropdown from './MonDropdown'
import DOMDropdown from './DOMDropdown'
import DOWDropdown from './DOWDropdown'
import HourDropdown from './HourDropdown'

const DropdownForm = ({
  handleClear,
  handleClickClose,
  handleChange,
  select
}) => {
  const handleAllClear = () => {
    const fieldName = ['mon', 'dow', 'dom', 'hour', 'min']
    handleClear({ fieldName })
  }
  return (
    <form>
      {/* <span>In</span>
      <MonDropdown
        handleClear={handleClear}
        select={select}
        handleChange={handleChange}
        handleClickClose={handleClickClose}
      />
      <span>On</span>

      <DOMDropdown
        handleClear={handleClear}
        handleClickClose={handleClickClose}
        select={select}
        handleChange={handleChange}
      />
      <span>And</span> */}

      <DOWDropdown
        handleClear={handleClear}
        handleClickClose={handleClickClose}
        select={select}
        handleChange={handleChange}
      />
      <span>At</span>

      <HourDropdown
        handleClear={handleClear}
        handleClickClose={handleClickClose}
        select={select}
        handleChange={handleChange}
      />
      <span>:</span>

      <MinDropdown
        handleClear={handleClear}
        handleClickClose={handleClickClose}
        select={select}
        handleChange={handleChange}
      />
      <button
        className={styles.guide__clearbutton}
        type='button'
        onClick={handleAllClear}
      >
        <span>Clear</span>
      </button>
    </form>
  )
}

DropdownForm.propTypes = {
  handleClear: PropTypes.func.isRequired
}

export default DropdownForm
