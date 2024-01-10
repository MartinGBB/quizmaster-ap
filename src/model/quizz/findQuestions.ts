import { connection } from '../connection'

export function getAllQuestions() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM questions', (err, results) => {
      if (err) {
        reject(err)
        throw new Error('Error executing query: ' + err.stack)
      } else {
        resolve(results)
      }
      connection.end()
    })
  })
}
