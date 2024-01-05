import express from 'express'
import { login } from './login'

const router = express.Router({ mergeParams: true })

router.get('/', login)

export { router }
