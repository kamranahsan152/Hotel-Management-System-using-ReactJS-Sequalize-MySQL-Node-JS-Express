const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')


async function authenticate(req, res, next) {
    const token = req.headers.cookie.split('=')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  const tokenData = await User.Token.findOne({ where: { token: token } });

  if (tokenData == null) {
    return res.sendStatus(401);
  }

  req.userId = tokenData.userId;
  next();
  }

  module.exports = authenticate;
  