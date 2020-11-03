# reactjs-crontab

> Light-weight crontab for handling repetitive tasks in React js

[![NPM](https://img.shields.io/npm/v/reactjs-crontab.svg)](https://www.npmjs.com/package/reactjs-crontab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Dashboard Demo](assets/dashboard.png)

## Installation

```bash
npm install --save reactjs-crontab
```

make sure to add date-fns as dev dependencies since this package depending on [date-fns](https://github.com/date-fns/date-fns#readme)

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

## Crontab Config Format

```
MIN-HOUR-DOM-MON-DOW-TIMEZONE
```

- MIN represents minute(s), can be 0 through 59. `*` means every minute
- HOUR represents hour(s) of a day, can be 0 through 23. `*` means every hour
- DOM represents day of month, can be 1 through 31. `*` means every day
- MON represents month, can be 1 through 12. `*` means every month
- DOW represents day of week, can be 1 through 7. 1 is Monday, 2 is Tusday and so on. `*` means every day
- TIMEZONE represent the timezone that crontab will refer to when it triggers tasks. Unfortunately, We only support 'utc timezone'. But we're working hard to improve this.

## Basic Example

Reactjs-crontab has very similar pattern to [Linux Crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples).
To learn linux crontab [Linux Crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples)
The difference is that this uses dash between arguments like this `*-*-*-*-*-*`. Whereas Linux crontab uses white space like this `* * * * * *`

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

const tasks = [
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
    // expected to run at 18:15P.M  every day (utc)
    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '15-*-*-*-*-utc',
    // expected to run every day, every hour as long as it's 15 minute (utc)
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


```

## note

- This will work well for simple crontab task but I have tons of features that I'd like to add. So stay tuned!
  Thank you so much for your attention!
- feel free to open issue. Any idea that could improve this package or bug report will be highly appreciated.

## License

MIT © [shawnscoding](https://github.com/shawnscoding/reactjs-crontab/blob/master/LICENSE)
