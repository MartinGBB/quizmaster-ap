import express from 'express'
import { login } from './Users/controller/login'
import { router as questions } from './QuestionsQuiz/controller/router'
import { router as quiz } from './Quiz/controller/router'

export const root = express.Router({ mergeParams: true })

const users = login

root.use('/user', users)
root.use('/quiz', quiz)
root.use('/questions', questions)
