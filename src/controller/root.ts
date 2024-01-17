import express from 'express'
import { login } from './users/login'
import { router as questions } from './questionsQuiz/router'
import { router as quiz } from './quiz/router'

export const root = express.Router({ mergeParams: true })

const users = login

root.use('/user', users)
root.use('/quiz', quiz)
root.use('/questions', questions)
