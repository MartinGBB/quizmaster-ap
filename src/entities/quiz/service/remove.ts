import { remove as removeModel } from '../model/remove'
import { ZodError, z } from 'zod'
import { quizIdExist } from './find'

const QuizIdSchema = z.number({
  invalid_type_error: 'Id deve ser um número',
  required_error: 'Id é requerido',
})

function validateId(id: number) {
  try {
    const validationId = QuizIdSchema.parse(id)
    return { success: true, value: validationId }
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

export async function update(id: number) {
  const validateInputId = validateId(id)

  if ('code' in validateInputId) {
    return { success: false, errorDetails: validateInputId }
  }

  const findQuizId = await quizIdExist(id)
  if (!findQuizId) return { success: false, errorDetails: 'Quiz não existe' }

  const result = await removeModel(id)

  if (result !== null) {
    return { success: true, message: 'Quiz deletado com sucesso' }
  }

  return { success: false, errorDetails: 'Um erro inesperado aconteceu' }
}
