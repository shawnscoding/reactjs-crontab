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

const App = () => {
  const [ open, setOpen ] = React.useState(null)

  const sayGoodMorning = () => {
    setOpen(true)
  }
  // this is the function which will run according to your settings


  const tasks = [
    {
      fn: sayGoodMorning,
      id: '1',
      config: '*-*-*-*-*',
      // this runs every minutes
      name: '',
      description: ''
    },
  ]

  return (
    <div>
      <Crontab 
        tasks={tasks}
        timeZone="local" 
        // current timezone is client-side local timezone.
        dashboard={{ 
          hidden: false
          // if true, dashboard is hidden
        }} 
      />
      {open && <MorningMsg />}
    </div>
  )
}

export default App