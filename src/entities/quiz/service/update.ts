import { update as updateModel } from '../model/update'
import { QuizData } from '../../../types/quiz.interface'
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

export async function update(params: QuizData, id: number) {
  const validateInputId = validateId(id)

  if ('code' in validateInputId) {
    return { success: false, errorDetails: validateInputId }
  }

  const findQuizId = await quizIdExist(id)
  if (!findQuizId)
    return { success: false, errorDetails: 'Quiz não encontrado' }

  const result = await updateModel(params, id)

  if (result !== null) {
    return { success: true, message: 'Dado atualizado com sucesso' }
  }

  return { success: false, errorDetails: 'Um erro inesperado aconteceu' }
}
