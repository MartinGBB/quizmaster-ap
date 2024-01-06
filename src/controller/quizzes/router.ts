import express from 'express'
import { findQuestions } from './findQuestions'

const router = express.Router({ mergeParams: true })

router.get('/', findQuestions)

export { router }
