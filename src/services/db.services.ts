import db from '../database/models'
class ServicesProvidyver {
  /**
   * @params {body}
   * @returns {newUser}
   */
  public createUser = async (body: any): Promise<any> => {
    const newUser: any = await db.UserModel.create(body)
    return newUser
  }
}
