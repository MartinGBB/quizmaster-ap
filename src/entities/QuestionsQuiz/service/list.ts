import { list as listModel } from '../../QuestionsQuiz/model/list'
import { QuestionData } from '../../types'

export function list() {
  const results: Promise<QuestionData[]> = listModel()
  return results
}
