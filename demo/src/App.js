import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const sayHello = () => {
  console.log('Hello')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

const RequestSomething2 = () => {
  console.log('Api request has been sent 222')
}

// these are the functions which will run according to the config

const App = () => {
  const tasks = React.useMemo(
    () => [
      {
        fn: sayHello,
        config: '* * * * *',
        // Execute every minutes
        id: '1', // optional
        name: 'Say Hello' // optional
      },
      {
        fn: RequestSomething,
        config: '* 22 * * *',
        // Execute In November, December At 3PM and 7PM every minute
        id: '2', // optional
        name: 'Request Something' // optional
      },
      {
        fn: RequestSomething2,
        config: '25,26,27 * * * *',
        // Execute In November, December At 3PM and 7PM every minute
        id: '2', // optional
        name: 'Request Something' // optional
      }
    ],
    []
  )
  // tasks should be memoized

  return (
    <Crontab
      tasks={tasks}
      timeZone='local'
      // timezone is UTC timezone.
      dashboard={{
        hidden: false
        // if true, dashboard is hidden
      }}
    />
  )
}
export default App
