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
      config: '*-*-*-*-*',
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