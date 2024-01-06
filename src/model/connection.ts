import mysql from 'mysql'

export const connectionDB = async () => {
  try {
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3001,
      user: 'martinb',
      database: 'quizmaster',
    })
    await connection.connect()
    console.log('Conectado a la base de datos')

    return connection
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error)
  }
}
