/* eslint-disable prettier/prettier */
import express, { Request, Response } from 'express'
import { globalErrorHandlers } from './middlewares/globalErrorHandlers'
const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is live',
  })
})

// Global Error Handler:
app.use(globalErrorHandlers)
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route Not Found',
  })
})

export default app
