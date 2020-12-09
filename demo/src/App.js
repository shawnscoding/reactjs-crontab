import React from 'react'
import { BasicCron, CronGuide } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!



const sayHello = () => {
  console.log('Hello')
}

const sayGoobye = () => {
  console.log('Goodbye')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}


const tasks = [
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*',
    name: '',
    description: ''
  }
,
  {
    fn: sayGoobye,
    id: '2',
    config: '*-8-9-12-*',
    name: '',
    description: ''
  },
  {
    fn: RequestSomething,
    id: '1',
    config: '25,26,27,28-8-9-12-*',
    name: '',
    description: ''
  }
]

const App = () => {
  return <BasicCron timeZone="local" tasks={tasks}   />
}

export default App