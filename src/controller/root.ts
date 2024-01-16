import express from 'express'
import { login } from './users/login'
import { router as quiz } from './quizzes/router'

export const root = express.Router({ mergeParams: true })

const users = login

root.use('/questions', quiz)
root.use('/user', users)
