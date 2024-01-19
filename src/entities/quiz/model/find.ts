import { QuizData } from '../../../types/quiz.interface'
import { connection } from '../../../config/database'

interface QuizDataResult extends QuizData {
  id: number
  created_at: Date
  update_at: Date
}

export async function find(
  questionId: number,
): Promise<QuizDataResult[] | null> {
  try {
    const db = connection.promise()
    const [result] = await db.query('SELECT * FROM quizzes WHERE id = $1', [
      questionId,
    ])
    const quizData = result

    if (quizData) {
      return quizData as QuizDataResult[]
    } else {
      return null
    }
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
