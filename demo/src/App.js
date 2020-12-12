import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
//copy and paste this code and run!
    
const function_1 = () => {
  console.log("called fn 1")
};
        
    const function_2 = () => {
      console.log("called fn 2")
    };
        
    const function_3 = () => {
      console.log("called fn 3")
    };
        
    const function_4 = () => {
      console.log("called fn 4")
    };
        
    
   
      
    
        
    const tasks = [
          {
            fn: function_1,
            id: '1',
            config: '*-*-*-*-*',
            name: '',
            description: ''
          }
        ,
          {
            fn: function_2,
            id: '2',
            config: '*-21-*-12-6-utc',
            name: '',
            description: ''
          }
        ,
          {
            fn: function_3,
            id: '3',
            config: '*-21-*-12-6',
            name: '',
            description: ''
          }
        ,
          {
            fn: function_4,
            id: '4',
            config: '*-21-*-12-6-utc',
            name: '',
            description: ''
          }
        ]
    
    const settings = {
      hidden: false
    }
    
    const timeZone = 'local'
        
    const App = () => {
        return (
          <BasicCron 
            tasks={tasks}
            timeZone={timeZone}
            dashboard={settings}
          />
        )
    }
        
    export default App