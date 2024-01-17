import { QuestionData } from '../../../types/questionsQuiz.interface'
import { connection } from '../../../config/database'

export async function list(): Promise<QuestionData[]> {
  try {
    const db = connection.promise()
    const [results] = await db.query('SELECT * FROM questions')

    return results as QuestionData[]
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
