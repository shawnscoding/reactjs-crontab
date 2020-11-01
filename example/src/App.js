import React from 'react'
import { BisicCronTab } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

// const testFn_1 = () => {
//   console.log('do something 1')
// }

// const testFn_2 = () => {
//   console.log('do something 2')
// }

// const testFn_3 = () => {
//   console.log('do something 3')
// }

// const testFn_4 = () => {
//   console.log('do something 4')
// }

// const testFn_5 = () => {
//   console.log('do something 5')
// }

// const testFn_6 = () => {
//   console.log('do something 6')
// }

// const tasks = [
//   {
//     fn: testFn_1,
//     id: '1',
//     config: '*-*-*-*-*-utc',
//     name: 'Alert 1',
//     description: 'say Hello'
//   },
//   {
//     fn: testFn_2,
//     id: '2',
//     config: '5-11-18-10-*-utc',
//     name: 'Alert 2',
//     description: 'say Goodbye'
//   },
//   {
//     fn: testFn_3,
//     id: '3',
//     config: '6-11-18-10-*-utc',
//     name: 'Alert 3',
//     description: 'Send API'
//   },
//   {
//     fn: testFn_4,
//     id: '4',
//     config: '6-*-18-10-*-utc',
//     name: 'Alert 4',
//     description: 'Send Event Notification'
//   },
//   {
//     fn: testFn_5,
//     id: '5',
//     config: '*-11-18-10-*-utc',
//     name: 'Alert 5'
//   },
//   {
//     fn: testFn_6,
//     id: '6',
//     config: '11-22-17-10-*-utc',
//     name: 'Alert 6'
//   }
// ]

const App = () => {
  return <BisicCronTab />
}

export default App
