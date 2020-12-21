import React from 'react'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const styles = {
  text: {
    margin: '70px',
    color: 'skyblue'
  }
}

const MorningMsg = () => {
  return <h1 style={styles.text}>Good Morning !</h1>
}

const NightMsg = () => {
  return <h1 style={styles.text}>Good Night!</h1>
}

const timeZone = 'local'
// timezone is client-side local timezone.

const dashboardSetting = {
  hidden: true
  // if true, dashboard is hidden
}

const App = () => {
  const [morningMsgOpen, setMoringMsgOpen] = React.useState(null)
  const [nightMsgOpen, setNightMsgOpen] = React.useState(null)

  const sayGoodMorning = () => {
    setMoringMsgOpen(true)
  }

  const sayGoodNight = () => {
    setNightMsgOpen(true)
  }
  // these are the functions which will run according to your settings

  const tasks = [
    // just put this array into <Crontab /> component as a props and it will work like magic!
    {
      fn: sayGoodMorning,
      id: '1',
      config: '*-*-*-*-*',
      // this runs every minutes
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
    <div>
      <Crontab timeZone={timeZone} tasks={tasks} dashboard={dashboardSetting} />
      {morningMsgOpen && <MorningMsg />}
      {nightMsgOpen && <NightMsg />}
    </div>
  )
}

export default App