const dbConfig = require('../config/dbConfig')

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            idle: dbConfig.pool.idle,
            acquire: dbConfig.pool.acquire,
        }
})


module.exports = sequelize;