import { connection } from '../connection'
import { QuestionData } from '../../types'

interface InsertResult {
  insertId?: number
  affectedRows: number
}

function insertQuery({
  quiz_id: quizId,
  question,
  answers,
  correct_answer: correctAnswer,
}: QuestionData) {
  const query = `
    INSERT INTO questions (quiz_id, question, answers, correct_answer)
    VALUES (?, ?, ?, ?)
  `
  return [query, [quizId, question, JSON.stringify(answers), correctAnswer]]
}

export async function createdQuestion(params: QuestionData) {
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
