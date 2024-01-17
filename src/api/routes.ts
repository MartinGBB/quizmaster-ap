import express from 'express'
import { router as login } from '../entities/Users/controller/router'
import { router as questions } from '../entities/QuestionsQuiz/controller/router'
import { router as quiz } from '../entities/Quiz/controller/router'

export const root = express.Router({ mergeParams: true })

root.use('/user', login)
root.use('/quiz', quiz)
root.use('/questions', questions)
