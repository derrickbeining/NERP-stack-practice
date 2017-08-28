'use strict'

const {yellow} = require('chalk')
const db = require('./db')

// build tables & set associations
require('./models')

module.exports = db.sync(/* {force: true} */)
  .then(() => console.log(yellow('DB synced')))
  .catch(console.error.bind(console))


// sync the db, creating it if necessary
// function sync (force = false, retries = 0, maxRetries = 5) {
//   return db.sync({force})
//     .then(ok => console.log(`Synced models to db ${connectionString}`))
//     .catch(fail => {
//       // Don't do this auto-create nonsense in prod, or
//       // if we've retried too many times.
//       if (process.env.NODE_ENV === 'production' || retries > maxRetries) {
//         console.error(chalk.red(`********** database error ***********`))
//         console.error(chalk.red(`    Couldn't connect to ${connectionString}`))
//         console.error()
//         console.error(chalk.red(fail))
//         console.error(chalk.red(`*************************************`))
//         return
//       }
//       // Otherwise, do this autocreate nonsense
//       console.log(`${retries ? `[retry ${retries}]` : ''} Creating database ${name}...`)
//       return new Promise((resolve, reject) =>
//         require('child_process').exec(`createdb "${name}"`, resolve)
//       ).then(() => sync(true, retries + 1))
//     })
// }

// db.attemptingSync = sync();

