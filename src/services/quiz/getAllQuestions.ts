import { getAllQuestions } from '../../model/quizz/findQuestions'
import { QuestionData } from '../../types'

export function allQuestions() {
  const results: Promise<QuestionData[]> = getAllQuestions()
  return results
}
