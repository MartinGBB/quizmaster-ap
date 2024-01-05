import express from 'express'
import { root } from '../controller/root'

export const app = express()

app.use(express.json())

app.use('/', root)
