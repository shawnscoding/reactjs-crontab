import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import { formatMonth } from '../../../../common/utils/utils'

const classes = {
  listOnClicked: {}
}

const isShouldBeOn = (value, mon) => {
  const splitted = mon.split(',')
  console.log('splitted ,', splitted)
  console.log(splitted.length === 1)
  if (mon === '*') {
    return false
  } else if (splitted.length === 1) {
    if (mon === value) {
      return true
    } else {
      return false
    }
  } else if (splitted.length > 1) {
    const found = splitted.find((val) => val === value)
    console.log('found ::', found)
    if (found) {
      return true
    } else {
      return false
    }
  }
}

const Checkbox = ({ isOn, item }) => {
  return (
    <span className={styles.checkbox__wrapper} aria-disabled='false'>
      <span className={`${isOn ? styles.checkbox__checked : styles.checkbox}`}>
        <input
          className={`${styles.checkbox__input}`}
          type='checkbox'
          value=''
          readOnly
        />
        <svg
          className={`${
            isOn ? styles.checkbox__icon__checked : styles.checkbox__icon
          }`}
          focusable='false'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
        </svg>
      </span>
      <span
        className={`${
          isOn ? styles.checkbox__animator__checked : styles.checkbox__animator
        }`}
      />
    </span>
  )
}

const SelectedDates = ({ mon }) => {
  const msg = 'Every Month'

  if (mon === '*') {
    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '-18px',
          left: '1px'
        }}
      >
        <span className={styles['select-box__input-text']}>{msg}</span>
      </div>
    )
  }
  const splitted = mon.split(',')

  const { value } = formatMonth({ value: splitted })

  const res = value.map((item, index) => {
    return (
      <div key={index} className={styles['select-box__input-wrapper']}>
        <span className={styles['select-box__input-text']}>{item}</span>
      </div>
    )
  })
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: '-18px',
        left: '1px'
      }}
    >
      {res}
    </div>
  )
}

const createArrWithNum = (num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    const iPlusOne = i + 1
    // const val = {
    //   id: iPlusOne.toString(),
    //   value: iPlusOne.toString(),
    //   label: iPlusOne.toString()
    // }
    arr.push(iPlusOne.toString())
  }
  const { value } = formatMonth({ value: arr })
  const res = value.map((item, index) => {
    const iPlusOne = index + 1
    return {
      id: iPlusOne.toString(),
      value: iPlusOne.toString(),
      label: item
    }
  })
  return res
  // 1 - 12
}

const MonSelect = ({ select, handleChange, handleCheckboxChange }) => {
  const { mon } = select
  const res = createArrWithNum(12)

  return (
    <React.Fragment>
      <div className={styles['select-box']}>
        <div className={styles['select-box__current']} tabIndex='1'>
          <div className={styles['select-box__value']}>
            <input
              type='text'
              value=''
              readOnly
              name='Ben'
              className={styles['select-box__input']}
            />
            <SelectedDates mon={mon} />
          </div>

          <img
            className={styles['select-box__icon']}
            src='http://cdn.onlinewebfonts.com/svg/img_295694.svg'
            alt='Arrow Icon'
            aria-hidden='true'
          />
        </div>
        <ul className={styles['select-box__list']}>
          {res.map((item) => {
            const isOn = isShouldBeOn(item.value, mon)

            return (
              <li
                onClick={() => handleChange({ name: 'mon', item })}
                key={item.id}
                className={styles['select-box__list-item']}
              >
                <label
                  className={styles['select-box__option']}
                  htmlFor={item.id}
                  aria-hidden='aria-hidden'
                >
                  {item.label}
                </label>
                <Checkbox item={item} handleChange={handleChange} isOn={isOn} />
              </li>
            )
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}

MonSelect.propTypes = {}

export default MonSelect

// import React from 'react'
// import PropTypes from 'prop-types'
// import styles from '../../../../styles.module.css'

// const Test = () => {
//   return (
//     <div className=''>
//       <button className='' type='button' title='Clear'>
//         <span className=''>
//           <svg className=''>
//             <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
//           </svg>
//         </span>
//         <span className='MuiTouchRipple-root' />
//       </button>
//       <button
//         className='MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator'
//         tabIndex='-1'
//         type='button'
//         aria-label='Open'
//         title='Open'
//       >
//         <span className='MuiIconButton-label'>
//           <svg
//             className='MuiSvgIcon-root'
//             focusable='false'
//             viewBox='0 0 24 24'
//             aria-hidden='true'
//           >
//             <path d='M7 10l5 5 5-5z' />
//           </svg>
//         </span>
//         <span className='MuiTouchRipple-root' />
//       </button>
//     </div>
//   )
// }

// const createArrWithNum = (num) => {
//   const arr = []
//   for (let i = 0; i < num; i++) {
//     const iPlusOne = i + 1
//     const val = {
//       id: iPlusOne.toString(),
//       value: iPlusOne.toString(),
//       label: iPlusOne.toString()
//     }
//     arr.push(val)
//   }

//   return arr
//   // 1 - 12
// }

// const MonSelect = ({ select, handleChange }) => {
//   const { mon } = select
//   const res = createArrWithNum(12)
//   return (
//     <React.Fragment>
//       <div className={styles.checkboxes__combobox}>
//         <div className={styles.checkboxes__wrapper}>
//           <label className={styles.checkboxes__label}>Checkboxes</label>

//           <div
//             className={`${styles.checkboxes__container} ${styles['MuiInputBase-root']} ${styles['MuiOutlinedInput-root']}`}
//           >
//             <input
//               className={`${styles.checkboxes__input} ${styles['MuiInputBase-input']}`}
//               type='text'
//             />
//             <Test />
//             <fieldset
//               className={`${styles['MuiInputBase-root']}`}
//               aria-hidden='true'
//             >
//               <legend className={`${styles['MuiInputBase-root']}`}>
//                 <span className={styles['checkboxes__label--focus']}>
//                   Checkboxes
//                 </span>
//               </legend>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

// MonSelect.propTypes = {}

// export default MonSelect

// <div class="select-box">
//   <div class="select-box__current" tabindex="1">
//     <div class="select-box__value">
//       <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked"/>
//       <p class="select-box__input-text">Cream</p>
//     </div>
//     <div class="select-box__value">
//       <input class="select-box__input" type="radio" id="1" value="2" name="Ben"/>
//       <p class="select-box__input-text">Cheese</p>
//     </div>
//     <div class="select-box__value">
//       <input class="select-box__input" type="radio" id="2" value="3" name="Ben"/>
//       <p class="select-box__input-text">Milk</p>
//     </div>
//     <div class="select-box__value">
//       <input class="select-box__input" type="radio" id="3" value="4" name="Ben"/>
//       <p class="select-box__input-text">Honey</p>
//     </div>
//     <div class="select-box__value">
//       <input class="select-box__input" type="radio" id="4" value="5" name="Ben"/>
//       <p class="select-box__input-text">Toast</p>
//     </div><img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
//   </div>
//   <ul class="select-box__list">
//     <li>
//       <label class="select-box__option" for="0" aria-hidden="aria-hidden">Cream</label>
//     </li>
//     <li>
//       <label class="select-box__option" for="1" aria-hidden="aria-hidden">Cheese</label>
//     </li>
//     <li>
//       <label class="select-box__option" for="2" aria-hidden="aria-hidden">Milk</label>
//     </li>
//     <li>
//       <label class="select-box__option" for="3" aria-hidden="aria-hidden">Honey</label>
//     </li>
//     <li>
//       <label class="select-box__option" for="4" aria-hidden="aria-hidden">Toast</label>
//     </li>
//   </ul>
// </div>
