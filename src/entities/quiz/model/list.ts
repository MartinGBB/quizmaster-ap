import { QuizData } from '../../../types/quiz.interface'
import { connection } from '../../../config/database'

export async function list(): Promise<QuizData[]> {
  try {
    const db = connection.promise()
    const [results] = await db.query(
      'SELECT id, title, description, number_of_questions FROM quizzes',
    )

    return results as QuizData[]
  } catch (error) {
    console.error('Error executing query:', error)
    throw error
  }
}
