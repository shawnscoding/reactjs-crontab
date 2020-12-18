import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const sayHello = () => {
  console.log('Hello')
}

const sayGoobye = () => {
  console.log('Goodbye')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

// these are the functions which will run according to your settings

const tasks = [
  // just put this array into <Crontab /> component as a props and it will work like magic!
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*',
    // Execute every minutes
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '*-*-*-12-*',
    // Execute In November on 12th At 07:05
    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '*-15,19-*-11,12-*',
    // Execute In November, December At 3PM and 7PM every minute
    // Note that this is implemented in two different hour
    name: 'Request Something',
    description: 'Send API'
  }
]

const timeZone = 'Asia/Seoul'
// timezone is utc

const dashBoardSettings = {
  hidden: false
  // if true, dashboard gets hidden
}

const App = () => {
  return (
    <Crontab tasks={tasks} timeZone={timeZone} dashboard={dashBoardSettings} />
  )
}
export default App