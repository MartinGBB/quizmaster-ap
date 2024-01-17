import { connection } from '../connection'
import { QuizData } from '../../types'

interface InsertResult {
  insertId?: number
  affectedRows: number
}

function insertQuery({
  title,
  description,
  number_of_questions: numberOfQuestions,
}: QuizData) {
  const query = `
    INSERT INTO quizzes (title, description, numberOfQuestions)
    VALUES (?, ?, ?)
  `
  return [query, [title, description, numberOfQuestions]]
}

export async function created(params: QuizData) {
  try {
    const [dataQuery, values] = insertQuery(params)
    const db = connection.promise()
    const result = await db.query(dataQuery as string, values)
    const { insertId } = result[0] as InsertResult
    return insertId
  } catch (error) {
    console.error('Error executing query:', error)
    throw new Error('Error executing query: ' + error)
  }
}
