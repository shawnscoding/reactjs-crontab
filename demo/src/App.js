//copy and paste this into your code !
import React from 'react'
import { BasicCron, CronGuide } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const function_1 = () => {
  console.log("called 1")
};
    
const function_2 = () => {
  console.log("called 2")
};
    
const function_3 = () => {
  console.log("called 3")
};
    


const tasks = [
  {
    fn: function_1,
    id: '1',
    config: '*-6,7,8-6-11,12-*-utc',
    name: '',
    description: ''
  }
,
  {
    fn: function_2,
    id: '2',
    config: '*-6,7,8-6-12-7-utc',
    name: '',
    description: ''
  }
,
  {
    fn: function_3,
    id: '3',
    config: '*-6,7,8-6-12-7-utc',
    name: '',
    description: ''
  }
]

const App = () => {
  return <CronGuide  />
}

export default App