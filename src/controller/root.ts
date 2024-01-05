import express from 'express'
import { login } from './users/login'

export const root = express.Router({ mergeParams: true })

const users = login

root.use('/', users)
