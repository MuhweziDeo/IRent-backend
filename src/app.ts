import express, { Request, Response } from 'express'
import userRouter from './resources/userAuth/user.routes'
import { errors } from 'celebrate'
import morgan from 'morgan'

/** @params {string} express function */
const prefix = '/api/v1/'

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
// the user routes for accessing user routes
app.use(`${prefix}users`, userRouter)
app.use(errors())
