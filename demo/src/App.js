import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const styles = {
  text: {
    margin: '70px',
    color: 'skyblue'
  }
}

const HelloMsg = () => {
  return <h1 style={styles.text}>Hello!</h1>
}

const App = () => {
  const [open, setOpen] = React.useState(null)

  const sayHello = () => {
    setOpen(true)
  }
  // this is the function which will run according to your settings

  const tasks = React.useMemo(
    () => [
      {
        fn: sayHello,
        config: '0,1 * * * *'
        // this runs every minutes
      },
      {
        fn: sayHello,
        config: '* 13,14 10 4 *'
        // In April At 9AM and At 35 minute(s), 36 minute(s)
      }
    ],
    []
  )
  // tasks should be memoized

  return (
    <div>
      <Crontab
        tasks={tasks}
        timeZone='UTC' // UTC timezone.
        dashboard={{
          hidden: false // if true, dashboard is hidden
        }}
      />
      {open && <HelloMsg />}
    </div>
  )
}

export default App
