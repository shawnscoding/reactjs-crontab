import React from 'react'
// import Notification from './component/Notification';
import { BasicCron } from "reactjs-crontab"
import 'reactjs-crontab/dist/index.css'

const content = {}


const Test = () => {
  return <div>hi</div>
}



const dashboardSetting = {
  hidden: false
}



function App() {
  const [ notification, setNotification ] = React.useState({
    open: false,
    content: "",
    btns: []
  })
  const [ msg, setMsg ] = React.useState(null)

  const function_1 = () => {
    setNotification({
      open: true,
      content: "Hello User! \n our jackets are in 50% sale! \n Check it out! ",
      btns: [{ content: "", url: "https://" }]
    })

    console.log("[function_1] called")
  };
      
  const function_2 = () => {
    setMsg("text")
    console.log("[function_2] called")
  };
  
  const tasks = [
    {
      fn: function_1,
      id: '2',
      config: '*-*-*-*-*',
      name: '',
      description: ''
    },
    {
      fn: function_2,
      id: '2',
      config: '*-*-14-12-*',
      name: '',
      description: ''
    }
  ]

  
    

  // React.useEffect(() => {
  //   setInterval(() => {

  //     setNotification({
  //       open: true,
  //       content: "test",
  //       btns: []
  //     })
  //   }, 5000)
  // }, [])

  console.log("[App] rendered")
  

  return (
    <div className="App">
      <BasicCron timeZone="local" tasks={tasks} dashboard={dashboardSetting}  />
      {notification.open && (
      <div>{notification.content}</div>
      // <Notification content={content} />
      )}
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default App;
