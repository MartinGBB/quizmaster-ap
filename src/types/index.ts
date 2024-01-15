export interface QuestionData {
  quiz_id: number
  question: string
  answers: {
    [key: string]: string
  }
  correct_answer: string
}
