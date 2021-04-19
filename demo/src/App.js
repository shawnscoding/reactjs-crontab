import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const styles = {
  text: {
    margin: '70px',
    color: 'skyblue'
  }
}

const RequestSomething = () => {
  console.log('Api request has been sent')
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
        config: '* * * * *'
        // this runs every minutes
      },
      {
        fn: RequestSomething,
        config: '38,39 9 * 4 *'
        // Execute In November, December At 3PM and 7PM every minute
        // name: 'Request Something'
      }
    ],
    []
  )
  // tasks should be memoized

  return (
    <div>
      <Crontab
        tasks={tasks}
        timeZone='utc'
        // timezone is UTC timezone.
        dashboard={{
          hidden: false
          // if true, dashboard is hidden
        }}
      />
      {open && <HelloMsg />}
    </div>
  )
}

export default App
