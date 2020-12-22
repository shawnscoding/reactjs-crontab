import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!
    
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
        config: '* * * 12 *',
        name: '',
        description: ''
      }
    ,
      {
        fn: function_2,
        id: '2',
        config: '* 15 * 12 1',
        name: '',
        description: ''
      }
    ,
      {
        fn: function_3,
        id: '3',
        config: '11,7,9 15 * 12 1',
        name: '',
        description: ''
      }
    ]

const settings = {
  hidden: false
}

const timeZone = 'Asia/Seoul'
    
const App = () => {
    return (
      <Crontab 
        tasks={tasks}
        timeZone={timeZone}
        dashboard={settings}
      />
    )
}
    
export default App