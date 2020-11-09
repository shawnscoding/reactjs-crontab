// import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
// import { BasicCronContext } from '../../../contexts/basic/BasicCronContext'
// import styles from '../../../styles.module.css'
// import {
//   formatDOW,
//   insertZero,
//   formatHour,
//   getHRtime,
//   formatMonth
// } from '../../../common/utils/utils'

// const addHrTime = (tasks) => {
//   if (!tasks.length) return []
//   const result = tasks.map((task) => {
//     // let year = "2020";
//     const hrTime = ''
//     const { config } = task
//     const splitted = config.split('-')
//     const { hour, hourFormat } = formatHour(splitted[1])
//     const inserted = insertZero(splitted)
//     // console.log('inserted ::', inserted)
//     const min = inserted[0]

//     const dom = inserted[2]
//     const mon = formatMonth(inserted[3])
//     const dow = formatDOW(inserted[4])
//     // since we have 32 possibilities, we are gonna have 32 if statements
//     const conditions = { min, hour, dom, mon, dow }
//     const res = getHRtime(hrTime, conditions, hourFormat)

//     return { ...task, hrTime: res }
//   })

//   return result
// }

// const Dashboard = (props) => {
//   const { tasks } = useContext(BasicCronContext)
//   // console.log('tasks in Dashboard', tasks)

//   const crons = addHrTime(tasks)
//   // console.log('crons :::')
//   return (
//     <div className={styles.dashboard}>
//       <table className={styles.dashboard__container}>
//         <caption className={styles.dashboard__title__container}>
//           <h1 className={styles.dashboard__title}>Dashboard</h1>
//         </caption>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Schedule</th>
//             <th>Schedule (HR)</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         {crons.length &&
//           crons.map((cron, index) => (
//             <tbody key={index}>
//               <tr>
//                 <td>{cron.id}</td>
//                 <td>{cron.name}</td>
//                 <td>{cron.config}</td>
//                 <td>Execute At: {cron.hrTime}</td>
//                 <td>{cron.description}</td>
//               </tr>
//             </tbody>
//           ))}
//       </table>
//     </div>
//   )
// }

// Dashboard.propTypes = {}

// export default Dashboard
