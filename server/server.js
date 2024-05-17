const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000
const cors = require('cors');
const sequelize = require('./Database/database.js')
const Room = require('./models/RoomModel')
const Cart = require('./models/cart')
const User = require('./models/UserModel')
const cookie_parser = require('cookie-parser')
const Room_router = require('./Router/Room')
const Signup_router = require('./Router/signup')
const Login_router = require('./Router/login')
app.use(cors())
app.use('/Images', express.static('Images'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookie_parser());

app.use(Room_router)
app.use(Signup_router)
app.use(Login_router)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Origin",
    "Origin, x-Requested-With, Content-type, Accept"
  );
  res.header("Access-Control-Allow-Origin", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});


sequelize.authenticate()
    .then(() => {
        User.User.sync({ force: false });
        Cart.sync({force: false});
        User.Token.sync({ force: false });
        Room.sync({ force: false });
        app.listen(port, () => {
            console.log(`DB connected Server is running on ${port}.......`);
        })
    })
    .catch(err => {
        console.log('Error')
    })
