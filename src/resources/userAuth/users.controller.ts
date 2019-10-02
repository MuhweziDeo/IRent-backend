import { Response, Request, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import UserService from '../../services/user.service'
import {verifyPassword} from '../../helpers/password.helper';
import { createToken } from '../../helpers/token.helper';

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
    const saltRounds = 10;
    const salt: any | string = bcrypt.genSaltSync(saltRounds)
    const { body } = req;
    const newUser = await UserService.createUser({
      username: body.username,
      email: body.email,
      password: bcrypt.hashSync(body.password, salt),
    });
    if (newUser)
      return res.status(201).json({
        message: 'user has been successfully created',
        user: newUser,
      })
  };

  public loginUser = async (
    req: Request,
    res: Response,
  ): Promise<any> => {
    const {body: {email, password}} = req;
    const user = await UserService.checkUserExist(email);

    if(!user || !user.isActive) {
      const message = !user ? 'User not Found' : 'User Account is InActive';
      const code = !user ? 404: 400;
      return res.status(code).send({
        success: false,
        message
      });
    }
    const isVerified = await verifyPassword(password, user.password);
    if(!isVerified) {
      return res.status(401).send({
        message: "Invalid password",
        success: false
      })
    }
    const {email: userEmail, id, username} = user;
    const token = await createToken({email: userEmail, id, username}, {expiresIn: "30h"});
    delete user['password'];
    return res.send({
      data: user,
      token,
      success: true
    });
  }
}
export default usersAuth
