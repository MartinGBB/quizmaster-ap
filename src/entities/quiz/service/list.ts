import { list as listModel } from '../model/list'
import { QuizData } from '../../../types/quiz.interface'

export function list() {
  const results: Promise<QuizData[]> = listModel()
  return results
}
