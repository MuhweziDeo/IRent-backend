const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  development: {
    url: process.env.DATABASE_URL_DEV,
    dialect: 'postgres',
    logging: false,
    // Use a different storage type. Default: sequelize
    migrationStorage: 'json',

    // Use a different file name. Default: sequelize-meta.json
    migrationStoragePath: 'sequelizeMeta.json',

    // Use a different table name. Default: SequelizeMeta
    migrationStorageTableName: 'sequelize_meta',

    // Use a different schema for the SequelizeMeta table
    migrationStorageTableSchema: 'custom_schema',
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
    dialect: 'postgres',
    logging: false,
    // Use a different storage type. Default: sequelize
    migrationStorage: 'json',

    // Use a different file name. Default: sequelize-meta.json
    migrationStoragePath: 'sequelizeMeta.json',

    // Use a different table name. Default: SequelizeMeta
    migrationStorageTableName: 'sequelize_meta',

    // Use a different schema for the SequelizeMeta table
    migrationStorageTableSchema: 'custom_schema',
  },
  production: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    // Use a different storage type. Default: sequelize
    migrationStorage: 'json',

    // Use a different file name. Default: sequelize-meta.json
    migrationStoragePath: 'sequelizeMeta.json',

    // Use a different table name. Default: SequelizeMeta
    migrationStorageTableName: 'sequelize_meta',

    // Use a different schema for the SequelizeMeta table
    migrationStorageTableSchema: 'custom_schema',
    dialectOptions: {
      ssl: true,
    },
  },
  preview: {
    dialect: 'postgres',
    url: process.env.REVIEW_DATABASE_URL,
    // Use a different storage type. Default: sequelize
    migrationStorage: 'json',

    // Use a different file name. Default: sequelize-meta.json
    migrationStoragePath: 'sequelizeMeta.json',

    // Use a different table name. Default: SequelizeMeta
    migrationStorageTableName: 'sequelize_meta',

    // Use a different schema for the SequelizeMeta table
    migrationStorageTableSchema: 'custom_schema',
    dialectOptions: {
      ssl: true,
    },
  },
}
