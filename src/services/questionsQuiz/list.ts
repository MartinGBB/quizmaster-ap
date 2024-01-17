import { list as listModel } from '../../model/questionsQuiz/list'
import { QuestionData } from '../../types'

export function list() {
  const results: Promise<QuestionData[]> = listModel()
  return results
}
