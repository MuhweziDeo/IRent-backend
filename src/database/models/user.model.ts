import * as Sequelize from 'sequelize'
import { SequelizeAttributes } from '../../types/types'
interface IuserInterfaceAttributes {
  id?: string
  username: string
  password: string
  email: string
  isActive: boolean
  userRole: number
  createdAt?: string
  updatedAt?: string
}

type userInstance = Sequelize.Instance<IuserInterfaceAttributes> &
  IuserInterfaceAttributes
type UserModel = Sequelize.Model<userInstance, IuserInterfaceAttributes>

export const initUser = (sequelize: Sequelize.Sequelize): UserModel => {
  const attributes: SequelizeAttributes<IuserInterfaceAttributes> = {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      autoIncrement: false,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userRole: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Date.now(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Date.now(),
    },
  }
  const users = sequelize.define<userInstance, IuserInterfaceAttributes>(
    'UserMdel',
    attributes,
    { tableName: 'users' },
  )
  return users
}
