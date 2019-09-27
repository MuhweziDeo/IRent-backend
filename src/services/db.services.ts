import db from '../database/models'
import { Op } from 'sequelize'
class ServicesProvidver {
  /**
   * @params {body}
   * @returns {newUser}
   */
  public static createUser = (body: any) => {
    const newUser: object = db.UserModel.create(body)
    return newUser
  }
  public static checkUserExist = (email: any) => {
    const userExist = db.UserModel.findOne({
      where: { email: email },
    })
    return userExist
  }
}
export default ServicesProvidver
