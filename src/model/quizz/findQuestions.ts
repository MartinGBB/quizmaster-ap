import { QuestionData } from '../../types'
import { connection } from '../connection'

export async function getAllQuestions(): Promise<QuestionData[]> {
  try {
    const db = connection.promise()
    const [results] = await db.query('SELECT * FROM questions')

    return results as QuestionData[]
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
