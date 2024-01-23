import { update as updateModel } from '../model/update'
import { QuizData } from '../../../types/quiz.interface'
import { ZodError, z } from 'zod'
import { quizIdExist } from './find'

const QuizIdSchema = z.number({
  invalid_type_error: 'Id deve ser um número',
  required_error: 'Id é requerido',
})

const QuizDataSchema = z.object({
  title: z.string().min(10, 'minimo 10 caracteres'),
  description: z.string().min(10, { message: 'Minimo 10 caracteres' }),
  number_of_questions: z.literal(10).or(z.literal(15)).or(z.literal(20)),
})

function paramsValidation(params: QuizData) {
  try {
    const validatedParams = QuizDataSchema.parse(params)

    return validatedParams
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
  const validateInputParams = paramsValidation(params)

  if ('code' in validateInputParams) {
    return { success: false, errorDetails: validateInputParams }
  }

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
