import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!

const function_1 = () => {
  console.log("called")
};
    
const function_2 = () => {
  console.log("called 2")

};
    


const tasks = [
  {
    fn: function_1,
    id: '1',
    config: '*-*-10-12-*-utc',
    name: '',
    description: ''
  }
,
  {
    fn: function_2,
    id: '2',
    config: '*-6-10-12-*-utc',
    name: '',
    description: ''
  },
]

const settings = {
  hidden: true
}

const App = () => {
  return <BasicCron dashboard={settings} tasks={tasks} />
}

export default App