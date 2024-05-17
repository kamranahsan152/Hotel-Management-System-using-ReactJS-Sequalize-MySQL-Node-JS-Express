
const sequelize = require('../Database/database.js')

const { DataTypes} = require('sequelize')

const Cart = sequelize.define("carts", {
    
    roomID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    roomName: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    roomType: {
        type: DataTypes.STRING(55),
    },
    description: {
        type: DataTypes.STRING(55),
    },
    image: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
    },
    userID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = Cart;