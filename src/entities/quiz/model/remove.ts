import { connection } from '../../../config/database'
import { FieldPacket, ResultSetHeader } from 'mysql2'

function removeQuery(id: number) {
  const query = `
  DELETE FROM quizzes WHERE id = ?
  `
  return [query, [id]]
}

export async function remove(id: number): Promise<number | null> {
  try {
    const [dataQuery, values] = removeQuery(id)
    const db = connection.promise()
    const result: [ResultSetHeader, FieldPacket[]] = await db.query(
      dataQuery as string,
      values,
    )
    const removeData = result[0].affectedRows
    if (removeData > 0) {
      return removeData
    } else {
      return null
    }
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
