import { QuizDataResult } from '../../../types/quiz.interface'
import { connection } from '../../../config/database'

export async function find(
  questionId: number,
): Promise<QuizDataResult[] | null> {
  try {
    const db = connection.promise()
    const [result] = await db.query(
      `SELECT * FROM quizzes WHERE id =  ${questionId}`,
    )
    if (Array.isArray(result) && result.length > 0) {
      return result as QuizDataResult[]
    } else {
      return null
    }
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
