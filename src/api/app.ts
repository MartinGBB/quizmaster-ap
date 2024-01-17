import express from 'express'
import { root } from '../entities/root'
import { handleErrorApi } from '../middlewares/handleErrorApi'

export const app = express()

app.use(express.json())

app.use('/', root)
app.use(handleErrorApi)
