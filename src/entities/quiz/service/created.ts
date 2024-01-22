import { QuizData } from '../../../types/quiz.interface'
import { create as createModel } from '../model/create'
import { ZodError, z } from 'zod'

const QuizDataSchema = z.object({
  title: z
    .string({
      required_error: 'title é requerido',
    })
    .min(10, 'minimo 10 caracteres'),
  description: z
    .string({ required_error: 'description é requerido' })
    .min(10, { message: 'Minimo 10 caracteres' }),
  number_of_questions: z.literal(10).or(z.literal(15)).or(z.literal(20)),
})

function validations(params: QuizData) {
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

export async function createQuiz(params: QuizData) {
  const validateData = validations(params)
  if ('code' in validateData) return { error: validateData }

  const data = await createModel(validateData)
  return data
}
