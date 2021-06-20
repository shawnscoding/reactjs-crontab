import React from 'react'
import styles from './styles.module.css'
import Dashboard from './components/basicCron/dashboard/Dashboard'
import PropTypes from 'prop-types'
import { validateValueTypes } from './common/utils/errHandler'
import { handleSetTimer } from './common/utils/main'

const comparisonFn = function (prevProps, nextProps) {
  return true
}

const Crontab = React.memo(({ timeZone, tasks, dashboard }) => {
  const { hidden, route } = dashboard
  const [_tasks, setTasks] = React.useState(null)
  React.useEffect(() => {
    if (tasks.length) {
      tasks = tasks.map((item, i) =>
        item.id === undefined ? { ...item, id: (i + 1).toString() } : item
      )

      const validatedTasks = []
      for (const item of tasks) {
        const task = validateValueTypes(item)

        validatedTasks.push(task)
      }
      // console.log('validatedTasks ::', validatedTasks)
      for (const item of validatedTasks) {
        if (item.valid) handleSetTimer(item, timeZone)
      }
      setTasks(validatedTasks)
    }
  }, [tasks])

  if (!hidden && route) {
    if (_tasks && window.location.pathname === route) {
      return (
        <div className={styles.global}>
          <Dashboard timeZone={timeZone} tasks={_tasks} />
        </div>
      )
    } else if (_tasks) return <React.Fragment />
  }

  // console.log('[Crontab] rendered')
  if (_tasks && !hidden)
    return (
      <div className={styles.global}>
        <Dashboard timeZone={timeZone} tasks={_tasks} />
      </div>
    )
  return <React.Fragment />
}, comparisonFn)

Crontab.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      id: PropTypes.string,
      config: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  ),
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool.isRequired,
    route: PropTypes.string
  }),
  timeZone: PropTypes.string.isRequired
}

Crontab.defaultProps = {
  tasks: [],
  dashboard: {
    hidden: false,
    route: undefined
  },
  timeZone: 'UTC'
}

export default Crontab
