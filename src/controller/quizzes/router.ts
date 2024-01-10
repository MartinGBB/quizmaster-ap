import express from 'express'
import { findQuestions } from './getAllQuestions'

const router = express.Router({ mergeParams: true })

router.get('/', findQuestions)

export { router }
