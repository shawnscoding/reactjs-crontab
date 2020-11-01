# reactjs-crontab

> Light-weight crontab for handling repetitive tasks in React js

[![NPM](https://img.shields.io/npm/v/reactjs-crontab.svg)](https://www.npmjs.com/package/reactjs-crontab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-crontab
npm install --save-dev date-fns
```

## Note

This package is not entirely stable at the moment. There are still a tons of features that I'd like to implement. However, it will work pretty well if you follow my guide.

I'm developing this package as hard as possible to make it super useful to your project :)
Thank you so much for your attention!

## motivation

This open source project is motivated by Linux crontab. [LinuxCrontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples)
In many cases, We need to implement some kind of functions in our app at particular time, such as sending notification, api call and so on .
This is very repetative task and sometimes, very complecated to do so.
Therefore, I've decided to create crontab node package, which is similar to Linux crontab.

The good-looking dashboard that I've created with crontab will be very helpful for scheduling and managing your repetitive tasks.

## Usage

```jsx
import React from 'react'
import { BisicCronTab } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const testFn_1 = () => {
  console.log('Hello')
}

const testFn_2 = () => {
  console.log('Goodbye')
}

const testFn_3 = () => {
  console.log('Api request has been sent')
}

const testFn_4 = () => {
  console.log('Send Event Notification')
}

const testFn_5 = () => {
  console.log('do something 5')
}

const testFn_6 = () => {
  console.log('do something 6')
}

const tasks = [
  {
    fn: testFn_1,
    id: '1',
    config: '*-*-*-*-*-utc',
    name: 'Alert 1',
    description: 'Say Hello'
  },
  {
    fn: testFn_2,
    id: '2',
    config: '*-*-1-*-7-utc',
    name: 'Alert 2',
    description: 'Say Goodbye'
  },
  {
    fn: testFn_3,
    id: '3',
    config: '6-11-18-10-*-utc',
    name: 'Alert 3',
    description: 'Send API'
  },
  {
    fn: testFn_4,
    id: '4',
    config: '6-*-18-10-*-utc',
    name: 'Alert 4',
    description: 'Send Event Notification'
  },
  {
    fn: testFn_5,
    id: '5',
    config: '*-11-18-10-*-utc',
    name: 'Alert 5'
  },
  {
    fn: testFn_6,
    id: '6',
    config: '11-22-17-10-*-utc'
  }
]

const App = () => {
  return <BisicCronTab tasks={tasks} />
}

export default App
```

## License

MIT © [shawnscoding](https://github.com/shawnscoding/reactjs-crontab/blob/master/LICENSE)
