import { Response, NextFunction, Request } from 'express'
import ServicesProvidver from '../services/db.services'
export const checkUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const {
    body: { username, email },
  } = req
  const userExist = await ServicesProvidver.checkUserExist(email)
  if (userExist)
    return res.status(400).json({
      error: `user with ${email} already exist`,
    })
  next()
}
