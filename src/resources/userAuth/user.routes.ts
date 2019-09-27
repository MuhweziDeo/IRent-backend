import { Router } from 'express'
import { userValidationSchema } from './users.validate'
import { celebrate } from 'celebrate'
import { checkUserExist } from '../../middlewares/userExist'
import usersAuth from './users.controller'
const user: usersAuth = new usersAuth()
const userRouter: Router = Router()
userRouter
  .route('/register')
  .all()
  .post(
    celebrate({ body: userValidationSchema }),
    checkUserExist,
    user.createUser,
  )
  .get()
  .put()

export default userRouter
