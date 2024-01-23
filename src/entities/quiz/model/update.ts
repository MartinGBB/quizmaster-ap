import { QuizData } from '../../../types/quiz.interface'
import { connection } from '../../../config/database'
import { FieldPacket, ResultSetHeader } from 'mysql2'

function updateQuery(
  id: number,
  { title, description, number_of_questions: numberOfQuestions }: QuizData,
) {
  const query = `
  UPDATE quizzes SET title = ?, description = ?, number_of_questions = ?
  WHERE id = ?
  `
  return [query, [title, description, numberOfQuestions, id]]
}

export async function update(
  params: QuizData,
  id: number,
): Promise<number | null> {
  try {
    const [dataQuery, values] = updateQuery(id, params)
    const db = connection.promise()
    const result: [ResultSetHeader, FieldPacket[]] = await db.query(
      dataQuery as string,
      values,
    )
    const updateData = result[0].affectedRows
    if (updateData > 0) {
      return updateData
    } else {
      return null
    }
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
