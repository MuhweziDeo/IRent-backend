import { Router } from 'express'
import { userValidationSchema, userLoginSchema } from './users.validate'
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
  .put();

userRouter
.route('/login')
.post(
  celebrate({body: userLoginSchema}),
  user.loginUser);  
export default userRouter
