import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../../styles.module.css'
import {
  convertSavedSelectsToProps,
  getDefaultFnsWithSavedSelects
} from './helper'

const codeBoxTemplate = (savedSelects, tzValue) => {
  return `import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!
    
${getDefaultFnsWithSavedSelects(savedSelects)}
    
${convertSavedSelectsToProps(savedSelects)}

const settings = {
  hidden: false
}

const timeZone = "${tzValue === 'default' ? 'UTC' : tzValue}"
    
const App = () => {
    return (
      <BasicCron 
        tasks={tasks}
        timeZone={timeZone}
        dashboard={settings}
      />
    )
}
    
export default App
`
}

const Codebox = ({ handleResetCodeBox, savedSelects, tzValue }) => {
  return (
    <div className={styles.codebox__container}>
      <pre className={styles.codebox}>
        {codeBoxTemplate(savedSelects, tzValue)}
      </pre>
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
