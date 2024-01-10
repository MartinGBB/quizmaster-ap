import mysql from 'mysql'
import { config } from 'dotenv'

config()

export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack)
    process.exit(1)
  }

  console.log('Database connected')
})
