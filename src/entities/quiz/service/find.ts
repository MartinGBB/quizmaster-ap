import { find as findModel } from '../model/find'
import { QuizDataResult } from '../../../types/quiz.interface'
import { ZodError, z } from 'zod'

const QuizIdSchema = z.number({
  invalid_type_error: 'Id deve ser um número',
  required_error: 'Id é requerido',
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

export async function quizIdExist(quizId: number) {
  const validateInput = validateId(quizId)
  if (!validateInput) return validateInput
  const result = await findModel(quizId)

  return !!result
}

export async function find(questionId: number) {
  const validateInput = validateId(questionId)

  if (!validateInput) return validateInput

  const result = await findModel(questionId)

  return result
}
