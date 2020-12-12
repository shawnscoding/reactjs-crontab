# reactjs-crontab

> Light-weight crontab for handling repetitive tasks in React js

[![NPM](https://img.shields.io/npm/v/reactjs-crontab.svg)](https://www.npmjs.com/package/reactjs-crontab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**Demo** and **Crontab guide** at [https://d180vcwahe2y6s.cloudfront.net/build/index.html](https://d180vcwahe2y6s.cloudfront.net/index.html)

![Crontab Guide Demo](https://raw.githubusercontent.com/shawnscoding/reactjs-crontab/HEAD/assets/cronGuide.png)

## Installation

```bash
npm install --save reactjs-crontab
```

## updated to 2.0.0

- **No extra dependencies** except React
- Very **light-weight**, only **vanilla css** is used to style the components
- Provide **specific error message**, you will find it so easy to debug.
- Provide **Dashboard** which enables easy monitoring of your crontab

## Inspired by

- [Linux Crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples)

## Crontab Config Format

```
MIN-HOUR-DOM-MON-DOW
```

OR

Can be multiple values like this

```
MIN,MIN-HOUR,HOUR-DOM,DOM-MON,MON-DOW,DOW
```

- MIN represents minute(s), can be 0 through 59
  . `*` means every minute
- HOUR represents hour(s) of a day, can be 0 through 23. `*` means every hour
- DOM represents day of month, can be 1 through 31. `*` means every day
- MON represents month, can be 1 through 12. `*` means every month
- DOW represents day of week, can be 1 through 7. 1 is Monday, 2 is Tusday and so on. `*` means every day
- Each sort of time value(s) must be separated by a hyphen `-`
- Multiple values must be separated by comma `,`

## Usage

Reactjs-crontab has very similar pattern to [Linux Crontab](https://www.geeksforgeeks.org/crontab-in-linux-with-examples)Except that this uses hyphen between arguments like this `*-*-*-*-*-utc`.

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
    config: '*-*-*-*-*',
    // Execute every minutes
    name: 'Say Hello',
    description: 'Say Hello on console'
  },
  {
    fn: sayGoobye,
    id: '2',
    config: '5-7-12-11-*',
    // Execute In November on 12th At 7AM and At 5 minute(s)

    name: 'Say Goodbye',
    description: 'Say Goodbye on console'
  },
  {
    fn: RequestSomething,
    id: '3',
    config: '*-15,19-*-11,12-*',
    // Execute In November, December At 3PM, 7PM every minute
    name: 'Request Something',
    description: 'Send API'
  },
  {
    fn: sendNotification,
    id: '4',
    config: '10-11-18-7-*',
    // Execute In July on 18th At 11AM and At 10 minute(s)
    name: 'Send Notification',
    description: 'Send Event Notification'
  },
  {
    fn: logUserOut,
    id: '5',
    config: '*-16-*-10-1',
    // Execute In October on Monday At 4PM every minute
    name: 'Log user out'
  }
]

const timeZone = 'UTC'
// UTC or local

const settings = {
  hidden: false
}

const App = () => {
  return <BasicCron tasks={tasks} timeZone={timeZone} dashboard={settings} />
}
export default App
```

Copying and pasting above code will result something like this below

![Dashboard Demo](https://raw.githubusercontent.com/shawnscoding/reactjs-crontab/HEAD/assets/dashboard.png)

And That's it. This will do what it says.

## Helper (Guide) Component

Simply import CronGuide and css and that's all.

```jsx
import React from 'react'
import { CronGuide } from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

const App = () => {
  return <CronGuide />
}

export default App
```

![Crontab Guide Demo](https://raw.githubusercontent.com/shawnscoding/reactjs-crontab/HEAD/assets/cronGuide.png)

This component is created to help you understand how to configure your crontab.
Even if you are aware of such function, This would make it easier to set your crontab up and running.

## API

```
BasicCron Props {
  tasks: [
    {
      fn: yourFn,
      id: '1',
      config: '*-11-18-10,13-*',
      name: 'logUserOut',
      description: 'Send API'
    }
  ],
  timeZone: "UTC",
  dashboard: {
    hidden: false
    // if true, dashboard is hidden
  }
}

BasicCron.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      config: PropTypes.string.isRequired,
      name: PropTypes.string,
      description: PropTypes.string
    })
  ),
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool
  }),
  timeZone: PropTypes.string
}

BasicCron.defaultProps = {
  tasks: defaultTasks,
  dashboard: {
    hidden: false
  },
  timeZone: 'UTC'
}

```

## Important Note

Unfortunately, We only support `UTC` and `local` timezone' at the moment. But we're working hard to release improved version very soon.

## Note

- feel free to open issue. [Reactjs-crontab Github repo](https://github.com/shawnscoding/reactjs-crontab). Any idea that could improve this package or bug report will be highly appreciated.
- We'll highly appreciate it if you promote this package to other devs in any way. We believe the appropriate usage of this package will save loads of thier time.

## License

MIT © [shawnscoding](https://github.com/shawnscoding/reactjs-crontab/blob/master/LICENSE)
