import React from 'react'
import { BasicCron } from 'reactjs-crontab'
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

const sendNotification = () => {
  console.log('Send Event Notification')
}

const logUserOut = () => {
  console.log('log user out')
}

// these are the functions which will run according to your settings

const tasks = [
  // just put this array into BasicCron component as a props and it will work like magic!
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*-utc',
    // Execute every minutes
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '5-7-05-12-*-utc',
    // Execute In November on 12th At 7AM and At 5 minute(s)

    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '*-3,4,5-6-11,12-*-utc',
    // Execute In November, December At 3PM, 7PM every minute
    name: 'Request Something',
    description: 'Send API'
  },
  {
    fn: sendNotification,
    id: '4',
    config: '*-3,4-6-12-*-utc',
    // Execute In July on 18th At 11AM and At 10 minute(s)
    name: 'Send Notification',
    description: 'Send Event Notification'
  },
  {
    fn: logUserOut,
    id: '5',
    config: '*-16-*-10-1-utc',
    // Execute In October on Monday At 4PM every minute
    name: 'Log user out'
  }
]

const App = () => {
  // this will scheduled tasks
  return <BasicCron tasks={tasks} />
}

export default App