// import React from 'react'
// import { BasicCron } from 'reactjs-crontab'
// import 'reactjs-crontab/dist/index.css'

// const sayHello = () => {
//   console.log('Hello')
// }

// const sayGoobye = () => {
//   console.log('Goodbye')
// }

// const RequestSomething = () => {
//   console.log('Api request has been sent')
// }

// const sendNotification = () => {
//   console.log('Send Event Notification')
// }

// const logUserOut = () => {
//   console.log('log user out')
// }

// // these are the functions which will run according to your settings

// const tasks = [
//   // just put this array into BasicCron component as a props and it will work like magic!
//   {
//     fn: sayHello,
//     id: '1',
//     config: '*-*-*-*-*-utc',
//     // Execute every minutes
//     name: 'Say Hello',
//     description: 'Say Hello on console'
//   },
//   {
//     fn: sayGoobye,
//     id: '2',
//     config: '5-7-12-11-*-utc',
//     // Execute In November on 12th At 7AM and At 5 minute(s)

//     name: 'Say Goodbye',
//     description: 'Say Goodbye on console'
//   },
//   {
//     fn: RequestSomething,
//     id: '3',
//     config: '*-15,19-*-11,12-*-utc',
//     // Execute In November, December At 3PM, 7PM every minute
//     name: 'Request Something',
//     description: 'Send API'
//   },
//   {
//     fn: sendNotification,
//     id: '4',
//     config: '10-11-18-7-*-utc',
//     // Execute In July on 18th At 11AM and At 10 minute(s)
//     name: 'Send Notification',
//     description: 'Send Event Notification'
//   },
//   {
//     fn: logUserOut,
//     id: '5',
//     config: '*-16-*-10-1-utc',
//     // Execute In October on Monday At 4PM every minute
//     name: 'Log user out'
//   }
// ]

// const settings = {
//   hidden: false
// }

// const App = () => {
//   return <BasicCron timeZone="local" dashboard={settings} tasks={tasks} />
// }
// export default App




import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
import { CronGuide } from 'reactjs-crontab';
//copy and paste this code and run!
    
const function_1 = () => {
  console.log("run 1")
};
      
  const function_2 = () => {
    console.log("run 2")
  };
      
  const function_3 = () => {
    console.log("run 3")
  };
      
  const function_4 = () => {
    console.log("run 4")
  };
    
  const tasks = [
    {
      fn: function_1,
      id: '1',
      config: '*-*-*-12-*',
      name: '',
      description: ''
    }
  ,
    {
      fn: function_2,
      id: '2',
      config: '*-*-10-12-*',
      name: '',
      description: ''
    }
  ,
    {
      fn: function_3,
      id: '3',
      config: '*-*-10-12-*',
      name: '',
      description: ''
    }
  ,
    {
      fn: function_4,
      id: '4',
      config: '*-*-10-12-*',
      name: '',
      description: ''
    }
  ]

const settings = {
  hidden: false
}

const timeZone = "UTC"
    
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