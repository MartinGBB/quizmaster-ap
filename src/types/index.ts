export interface QuizData {
  title: string
  description: string
  number_of_questions: number
}

export interface QuestionData {
  quiz_id: number
  question: string
  answers: {
    [key: string]: string
  }
  correct_answer: string
}
