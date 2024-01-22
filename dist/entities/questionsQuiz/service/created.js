import { quizIdExist } from '../../quiz/service/find';
import { create as createModel } from '../model/create';
import { ZodError, z } from 'zod';
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
});
const CorrectAnswerSchema = z.enum(['A', 'B', 'C', 'D']);
const QuestionDataSchema = z.object({
    quiz_id: z.number({
        required_error: 'quiz_id é requerido',
        invalid_type_error: 'quiz_id deve ser um número',
    }),
    question: z
        .string({
        required_error: 'question é requerido',
        invalid_type_error: 'quiestion deve ser string',
    })
        .min(10, { message: 'Minimo 10 caracteres' }),
    answers: AnswerObject,
    correct_answer: CorrectAnswerSchema,
});
async function validateIfQuizExist(quizId) {
    const quizExist = await quizIdExist(quizId);
    if (!quizExist)
        return { code: 'not_found', message: 'Quiz não existe, verifique o ID' };
}
async function validations(params) {
    try {
        const validatedParams = QuestionDataSchema.parse(params);
        const validateQuizId = await validateIfQuizExist(params.quiz_id);
        if (validateQuizId)
            return validateQuizId;
        return validatedParams;
    }
    catch (error) {
        if (error instanceof ZodError) {
            const { code, message } = error.errors[0];
            return { code, message };
        }
        else {
            console.error('Error de validación:', error);
            throw new Error('Error de validación');
        }
    }
}
export async function created(params) {
    const validateData = await validations(params);
    if ('code' in validateData)
        return validateData;
    const data = await createModel(validateData);
    return data;
}
//# sourceMappingURL=created.js.map