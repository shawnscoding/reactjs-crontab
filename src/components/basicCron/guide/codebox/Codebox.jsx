import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import {
  convertSavedSelectsToProps,
  getDefaultFnsWithSavedSelects
} from './helper'

const codeBoxTemplate = (savedSelects) => {
  return `import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!
    
${getDefaultFnsWithSavedSelects(savedSelects)}
    
${convertSavedSelectsToProps(savedSelects)}
    
const App = () => {
    return <BasicCron tasks={tasks} />
}
    
export default App
`
}

const Codebox = ({ handleResetCodeBox, savedSelects }) => {
  return (
    <div className={styles.codebox__container}>
      <pre className={styles.codebox}>{codeBoxTemplate(savedSelects)}</pre>
      <div className={styles.codebox__btngroup}>
        <button
          className={styles['guide__btn-reset']}
          type='button'
          onClick={handleResetCodeBox}
        >
          <span>Reset</span>
        </button>
      </div>
    </div>
  )
}

Codebox.propTypes = {
  handleResetCodeBox: PropTypes.func.isRequired,
  savedSelects: PropTypes.array.isRequired
}

export default Codebox
