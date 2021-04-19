import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const sayHello = () => {
  console.log('Hello')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

// these are the functions which will run according to the config

const App = () => {
  const tasks = React.useMemo(
    () => [
      {
        fn: sayHello,
        config: '* * * * *'
        // Execute every minutes
        // name: 'Say Hello'
      },
      {
        fn: RequestSomething,
        config: '* * * 4 *'
        // Execute In November, December At 3PM and 7PM every minute
        // name: 'Request Something'
      }
    ],
    []
  )
  // tasks should be memoized

  return (
    <>
      <Crontab
        tasks={tasks}
        timeZone='UTC'
        // timezone is UTC timezone.
        dashboard={{
          hidden: false
          // if true, dashboard is hidden
        }}
      />
      {/* <table>
        <thead>
          <tr>
            <th>dsa</th>
            <th>dsa</th>
            <th>dsa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>dsa</th>
            <th>dsa</th>
            <th>dsa</th>
          </tr>
        </tbody>
      </table> */}
    </>
  )
}
export default App
