import { QuestionData } from '../../types'
import { created } from '../../model/quizz/created'
function validations(params: QuestionData) {
  // const {
  //   quiz_id: quizId,
  //   question,
  //   answers,
  //   correct_answer: correctAnswer,
  // } = params
  return params
}

export async function createQuestion(params: QuestionData) {
  const validateData = validations(params)
  const data = await created(validateData)
  return data
}
