import express from 'express'
import { login } from './users/login'
import { findQuestions } from './quizzes/findQuestions'

export const root = express.Router({ mergeParams: true })

const users = login
const questions = findQuestions

root.use('/', users)
root.use('/', questions)
