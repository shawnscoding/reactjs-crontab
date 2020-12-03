import React from 'react'
import { CronGuide,BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
// simply import CronGuide and css and that's all.

const App = () => {
  return (
    <div>
      <BasicCron />
      <CronGuide />

    </div>
  )
}

export default App