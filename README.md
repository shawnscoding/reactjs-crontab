# reactjs-crontab

> Light-weight crontab for handling repetitive tasks in React js

[![NPM](https://img.shields.io/npm/v/reactjs-crontab.svg)](https://www.npmjs.com/package/reactjs-crontab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Dashboard Demo](assets/dashboard.png)

## Installation

```bash
npm install --save reactjs-crontab
```

make sure to add date-fns as dev dependencies as this package depending on [date-fns](https://date-fns.org/)

```bash
npm install date-fns@^2.0.0 --save-dev
```

## Inspired by

- [Linux Crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples)

<!-- ## Note

This package is not entirely stable at the moment. There are still a tons of features that I'd like to implement. However, it will work pretty well if you follow my guide.

I'm developing this package as hard as possible to make it super useful to your project :)
Thank you so much for your attention! -->

<!-- In many cases, We need to implement repetitive tasks which runs at particular time, such as sending notification, api call and so on .
This is very mamual and sometimes, very complecated to do so.
Therefore, I've decided to create crontab node package, which is similar to Linux crontab.

The good-looking dashboard that I've created with crontab will be very helpful for scheduling and managing your repetitive tasks. -->

## Basic Example

Reactjs-crontab has very similar pattern to Linux Crontab.
The difference is that this uses dash between arguments like this `*-*-*-*-*-*` when you set time that you want it to run, Whereas Linux crontab uses white space like this `* * * * * *`

To learn linux crontab [Linux Crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples)

```jsx
import React from 'react'
import { BasicCron } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

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
  // just put this array into BasicCron component as a props and it will work like magic!
  {
    fn: sayHello,
    id: '1',
    config: '*-*-*-*-*-utc',
    // expected to run every minutes
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '15-30-*-*-*-utc',
    // expected to run at 18:15P.M  everyday (utc)
    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '15-*-*-*-*-utc',
    // expected to run everyday, every hour as long as it's 15 minute (utc)
    name: 'Request Something',
    description: 'Send API'
  },
  {
    fn: sendNotification,
    id: '4',
    config: '10-11-18-3-*-utc',
    // expected to run at 11:10A.M. as long as it's 18th March (utc)
    name: 'Send Notification',
    description: 'Send Event Notification'
  },
  {
    fn: logUserOut,
    id: '5',
    config: '*-16-18-10-*-utc',
    // expected to run every minute at 4P.M. as long as it's 18th October (utc)
    name: 'Log user out'
  }
]

const App = () => {
  // this will display dashboard with scheduled tasks
  return <BasicCron tasks={tasks} />
}

// config 1-1-1-1-1-utc
// the first number represent minute(s), can be 0-59. '*' means every minute
// the second 1 represent hour(s) of a day, can be 0-23. '*' means every hour
// the third 1 represent dom(day of month), can be 1-31. '*' means everyday
// the forth 1 represent month, can be 1-12. '*' means every month
// the forth 1 represent dow(day of week), can be 1-7. 1 is Monday, 2 is Tusday and so on. '*' means everyday
// the 'utc' after fifth dash represent the timezone is set as utc. Unfortunately no other timezone is supported at the monent. but we're working hard to improve this.
export default App
```

## API

```
BasicCron Props {
  tasks [
    {
      fn: yourFn, // (required field) type function
      id: '1', // (required field) type string
      config: '*-11-18-10-*-utc', // (required field) type string
      name: 'logUserOut', // (optional field) type string
      description: 'Send API' // (optional field) type string
    }
  ]
}


config 1-1-1-1-1-utc
the first number represent minute(s), can be 0-59. '*' means every minute
the second 1 represent hour(s) of a day, can be 0-23. '*' means every hour
the third 1 represent dom(day of month), can be 1-31. '*' means everyday
the forth 1 represent month, can be 1-12. '*' means every month
the forth 1 represent dow(day of week), can be 1-7. 1 is Monday, 2 is Tusday and so on. '*' means everyday
the 'utc' after fifth dash represent the timezone is set as utc. Unfortunately no other timezone is supported at the monent. but we're working hard to improve this.



```

## License

MIT © [shawnscoding](https://github.com/shawnscoding/reactjs-crontab/blob/master/LICENSE)
