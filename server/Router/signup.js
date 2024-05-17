const signupAuth = require('../Controller/signupAuth');
const router = require('express').Router();

//post
router.post('/signup', signupAuth)
module.exports = router
