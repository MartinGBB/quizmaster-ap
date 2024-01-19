import { find as findModel } from '../model/find'
import { QuizDataResult } from '../../../types/quiz.interface'
import { ZodError, z } from 'zod'

const QuizIdSchema = z.object({
  correct_answer: z.number({
    invalid_type_error: 'Id deve ser um número',
    required_error: 'Id é requerido',
  }),
})

function validateId(id: number) {
  try {
    const validationId = QuizIdSchema.parse(id)
    return validationId
  } catch (error) {
    if (error instanceof ZodError) {
      const { code, message } = error.errors[0]
      return { code, message }
    } else {
      console.error('Error de validación:', error)
      throw new Error('Error de validación')
    }
  }
}

export function quizIdExist(data: QuizDataResult[] | null): boolean {
  return !!data
}

export async function find(questionId: number, confirmId = false) {
  const validateInput = validateId(questionId)

  if ('code' in validateInput) return validateInput

  const result: Promise<QuizDataResult[] | null> = findModel(questionId)

  if (confirmId) {
    const quizExist = quizIdExist(await result)
    return quizExist
  }
  return result
}
