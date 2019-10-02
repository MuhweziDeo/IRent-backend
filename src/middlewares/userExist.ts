import { Response, NextFunction, Request } from 'express'
import ServicesProvider from '../services/user.service'

export const checkUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const {
    body: { email },
  } = req;
  const userExist = await ServicesProvider.checkUserExist(email);
  if (userExist)
    return res.status(400).json({
      error: `user with ${email} already exist`,
    });
  next()
};
