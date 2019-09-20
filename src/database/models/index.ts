import { Sequelize } from 'sequelize'
import { initUser } from './user.model'
const env = process.env.NODE_ENV || 'development'
const config = require('/../config.ts')[env]
const url = config.url || process.env.DATABASE_URL_DEV

const sequelize = new Sequelize(url, config)

const db = {
  sequelize,
  Sequelize,
  UserModel: initUser(sequelize),
}
Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db)
  }
})

export default db
