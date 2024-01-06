import { connectionDB } from '../connection'

export const allItems = async () => {
  try {
    const db = await connectionDB()
    const query = await db?.query('SELECT * FROM quizmaster.questions')

    return [query]
  } catch (error) {
    console.error('Error fetching questions:', error)
    throw error
  }
}
