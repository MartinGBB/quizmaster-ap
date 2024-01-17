import { QuestionData } from '../../types'
import { created } from '../../model/quizz/created'
import { ZodError, z } from 'zod'

const AnswerObject = z.object({
  A: z.string({
    required_error: "Opção 'A' debe ser informada",
  }),
  B: z.string({
    required_error: "Opção 'B' debe ser informada",
  }),
  C: z.string({
    required_error: "Opção 'C' debe ser informada",
  }),
  D: z.string({
    required_error: "Opção 'D' debe ser informada",
  }),
})

const CorrectAnswerSchema = z.enum(['A', 'B', 'C', 'D'])

const QuestionDataSchema = z.object({
  quiz_id: z.number({
    required_error: 'quiz_id é requerido',
  }),
  question: z
    .string({ required_error: 'question é requerido' })
    .min(10, { message: 'Minimo 10 caracteres' }),
  answers: AnswerObject,
  correct_answer: CorrectAnswerSchema,
})

function validations(params: QuestionData) {
  try {
    const validatedParams = QuestionDataSchema.parse(params)

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

export async function createQuestion(params: QuestionData) {
  const validateData = validations(params)
  if ('code' in validateData) return { error: validateData }

  const data = await created(validateData)
  return data
}
