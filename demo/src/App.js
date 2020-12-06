import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!

const function_1 = () => {};
    
const function_2 = () => {};
    


const tasks = [
  {
    fn: function_1,
    id: '1',
    config: '1,2-13-3,4-*-*-utc',
    name: '',
    description: ''
  }
,
  {
    fn: function_2,
    id: '2',
    config: '1,2-13-3,4-1,2-*-utc',
    name: '',
    description: ''
  }
]

const App = () => {
  return <BasicCron tasks={tasks} />
}

export default App