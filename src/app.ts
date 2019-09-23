import express, { Request, Response } from 'express'
import morgan from 'morgan'

/** @params {string} express function */

export const app = express()
export const port: any = process.env.PORT || 8080
/** coverts the request into into json objects */
app.use(express.json())
app.use(morgan('dev'))
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'welcome to the home page',
  })
})
