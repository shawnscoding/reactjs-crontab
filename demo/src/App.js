import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const MorningMsg = () => {
  return <div>Good Morning !</div>
}

const NightMsg = () => {
  return <div>Good Night!</div>
}

const timeZone = 'local'

const dashboardSetting = {
  hidden: true
  // if true, dashboard is hidden
}

const App = () => {
  const [openMorningMsg, setOpenMoringMsg] = React.useState(null)
  const [openNightMsg, setOpenNightMsg] = React.useState(null)

  const sayGoodMorning = () => {
    setOpenMoringMsg(true)
  }

  const sayGoodNight = () => {
    setOpenNightMsg(true)
  }

  const tasks = [
    {
      fn: sayGoodMorning,
      id: '1',
      config: '0-8-*-*-*',
      // this will run at 08:00 everyday
      name: '',
      description: ''
    },
    {
      fn: sayGoodNight,
      id: '2',
      config: '0-21-*-*-*',
      // this will run at 21:00 everyday
      name: '',
      description: ''
    }
  ]

  return (
    <div className='App'>
      <Crontab timeZone={timeZone} tasks={tasks} dashboard={dashboardSetting} />
      {openMorningMsg && <MorningMsg />}
      {openNightMsg && <NightMsg />}
    </div>
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