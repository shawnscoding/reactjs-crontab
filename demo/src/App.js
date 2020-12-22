import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!
    
const function_1 = () => {};
  
const function_2 = () => {};
  

    
const tasks = [
      {
        fn: function_1,
        id: '1',
        config: '* * * 2,3 *',
        name: '',
        description: ''
      }
    ,
      {
        fn: function_2,
        id: '2',
        config: '* * * 2,3 *',
        name: '',
        description: ''
      }
    ]
    
const App = () => {
    return (
      <Crontab 
        tasks={tasks}
        timeZone='Africa/Khartoum'
        dashboard={{ hidden: false }}
      />
    )
}
    
export default App