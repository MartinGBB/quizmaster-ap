import mysql from 'mysql'

let connection = null

try {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'martinb',
    database: 'quizmaster',
  })

  connection.connect()
  console.log('Conectado a la base de datos')
} catch (error) {
  console.error('Error al conectar a la base de datos:', error)
}
