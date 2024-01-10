import { getAllQuestions } from '../../model/quizz/findQuestions'

export const allQuestions = async () => {
  const results = await getAllQuestions()
  return results
}
