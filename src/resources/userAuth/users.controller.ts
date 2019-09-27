import { Response, Request, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import ServicesProvidver from '../../services/db.services'
class usersAuth {
  /**
   * @params {req}
   * @params {res}
   * @returns {res}
   */
  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    const saltRounds = 10
    const salt: any | string = bcrypt.genSaltSync(saltRounds)
    const { body } = req
    const newUser = await ServicesProvidver.createUser({
      username: body.username,
      email: body.email,
      password: bcrypt.hashSync(body.password, salt),
    })
    if (newUser)
      return res.status(201).json({
        message: 'user has been successfully created',
        user: newUser,
      })
  }
}
export default usersAuth
