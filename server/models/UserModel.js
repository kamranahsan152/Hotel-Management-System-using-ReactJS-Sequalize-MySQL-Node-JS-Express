const sequelize = require('../Database/database.js')
const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcryptjs')
const User = sequelize.define("users", {
    userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(55),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(55),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },


})
User.prototype.validPassword = function (password, u) {
    return bcrypt.compareSync(password, u);
};

class Token extends Model {}
Token.init({
  token: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, { sequelize, modelName: 'token' });


module.exports = {
    Token, User
}