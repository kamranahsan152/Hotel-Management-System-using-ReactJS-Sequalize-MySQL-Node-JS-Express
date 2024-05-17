const loginAuth = require('../Controller/loginAuth');
const router = require('express').Router();
const authenticate = require('../Controller/authenticate')
//post
router.post('/login', loginAuth.loginAuth)
router.get('/logout', loginAuth.logout)
module.exports = router
