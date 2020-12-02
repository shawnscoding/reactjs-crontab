const sayHello = () => {
  console.log('Hello')
}

const sayGoobye = () => {
  console.log('Goodbye')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

const sendNotification = () => {
  console.log('Send Event Notification')
}

const logUserOut = () => {
  console.log('log user out')
}

// these are the functions which will run according to your settings

const defaultTasks = [
  // tasks props should be array
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*-utc',
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '5-7-12-11-*-utc',
    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '*-15,19-*-11,12-*-utc',
    name: 'Request Something',
    description: 'Send API'
  },
  {
    fn: sendNotification,
    id: '4',
    config: '10-11-18-7-*-utc',
    name: 'Send Notification',
    description: 'Send Event Notification'
  },
  {
    fn: logUserOut,
    id: '5',
    config: '*-16-*-10-1-utc',
    name: 'Log user out'
  }
]

export default defaultTasks

// issue

// config: '*-9,10-9,10-3,11,12-1,2,3-utc',

// 9 10
// 9 10
// 9 10
// 3 11 12
// 1 2 3

// at 9 and 10 minutes 9 10 hours on mon, tue, webs in 9, 10th, Mar, Nov

// *
// 9 10
// 9
// 3 11
// 1 2
// every minutes as long as at 9 and 10 hours on mon, tue in 9th, mar and nov

// 10, 12
// *
// 9
// 3 11
// 1 2
// every hour as long as at 9 and 10 hours on mon, tue in 9th, mar and nov
