import { connection } from '../../../config/database'
import { FieldPacket, ResultSetHeader } from 'mysql2'

type resultType = [ResultSetHeader, FieldPacket[]]

export async function remove(quizId: number): Promise<number | null> {
  try {
    const db = connection.promise()

    const removedQuestionRows: resultType = await db.query(
      'DELETE FROM questions WHERE quiz_id = ?',
      [quizId],
    )

    const removedQuizRows: resultType = await db.query(
      'DELETE FROM quizzes WHERE id = ?',
      [quizId],
    )

    const removeQuestions = removedQuestionRows[0].affectedRows
    const removeQuiz = removedQuizRows[0].affectedRows

    if (removeQuestions > 0 && removeQuiz > 0) {
      return removeQuestions + removeQuiz
    } else {
      return null
    }
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
