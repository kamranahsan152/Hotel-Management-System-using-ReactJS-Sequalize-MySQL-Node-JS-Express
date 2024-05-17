
const sequelize = require('../Database/database.js')

const { Sequelize} = require('sequelize')

const Room = sequelize.define("rooms", {
    roomID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    roomName: {
        type: Sequelize.STRING(55),
        allowNull: false
    },
    roomType: {
        type: Sequelize.STRING(55),
    },
    description: {
        type: Sequelize.STRING(55),
    },
    image: {
        type: Sequelize.STRING
    },
    oldprice: {
        type: Sequelize.INTEGER,
    },
    price: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.STRING(55),
    }

});


module.exports = Room;