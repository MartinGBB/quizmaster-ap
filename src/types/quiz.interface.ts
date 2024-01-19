export interface QuizData {
  title: string
  description: string
  number_of_questions: number
}

export interface QuizDataResult extends QuizData {
  id: number
  created_at: Date
  update_at: Date
}
