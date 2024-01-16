import express from 'express'
import { findQuestions } from './getAllQuestions'
import { create } from './createQuestion'

const router = express.Router({ mergeParams: true })

router.get('/', findQuestions)
router.post('/', create)

export { router }
