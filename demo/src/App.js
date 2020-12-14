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
        config: '*-*-*-*-*',
        name: '',
        description: ''
      }
    ,
      {
        fn: function_2,
        id: '2',
        config: '*-*-15-12-*',
        name: '',
        description: ''
      }
    ,
      {
        fn: function_3,
        id: '3',
        config: '*-1-15-12-2',
        name: '',
        description: ''
      }
    ]

const settings = {
  hidden: false
}

const timeZone = 'Asia/Tokyo'
    
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
// import React from 'react'
// import Crontab from 'reactjs-crontab'
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

// // these are the functions which will run according to your settings

// const tasks = [
//   // just put this array into Crontab component as a props and it will work like magic!
//   {
//     fn: sayHello,
//     id: '1',
//     config: '*-*-*-*-*',
//     // Execute every minutes
//     name: 'Say Hello',
//     description: 'Say Hello on console'
//   },
//   {
//     fn: sayGoobye,
//     id: '2',
//     config: '*-15-14-12-*',
//     // Execute In November on 12th At 7AM and At 5 minute(s)
//     name: 'Say Goodbye',
//     description: 'Say Goodbye on console'
//   },
//   {
//     fn: RequestSomething,
//     id: '3',
//     config: '17,18,19-15-14-12-*',
//     // Execute In November, December At 3PM, 7PM every minute
//     // Note that this is implemented in two different hour
//     name: 'Request Something',
//     description: 'Send API'
//   }
// ]

// const timeZone = 'local'

// const dashBoardSettings = {
//   hidden: false
//   // if true, dashboard gets hidden
// }

// const App = () => {
//   return (
//     <Crontab
//       tasks={tasks}
//       timeZone={timeZone}
//       dashboard={dashBoardSettings}
//     />
//   )
// }
// export default App