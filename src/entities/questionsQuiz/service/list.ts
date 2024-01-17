import { list as listModel } from '../model/list'
import { QuestionData } from '../../../types/questionsQuiz.interface'

export function list() {
  const results: Promise<QuestionData[]> = listModel()
  return results
}
