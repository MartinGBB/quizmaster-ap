import { find as findModel } from '../model/find'
import { QuizDataResult } from '../../../types/quiz.interface'

export function find(questionId: number): Promise<QuizDataResult[] | null> {
  const result: Promise<QuizDataResult[] | null> = findModel(questionId)
  return result
}
