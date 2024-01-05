import express, { Request, Response } from 'express'

export const app = express()

app.use(express.json())

app.get('/', function (_req: Request, res: Response): void {
  res.status(200).send({ message: 'hello word' })
})
