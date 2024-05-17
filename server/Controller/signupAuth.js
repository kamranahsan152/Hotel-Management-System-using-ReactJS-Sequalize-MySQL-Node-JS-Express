
const bcrypt = require('bcryptjs')
const User = require('../models/UserModel')
const signupAuth = async (req, res) => {


    const { username, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
        return res.status(422).json({ error: "Password does not match" })
    }

    if (!username || !email || !password) {
        return res.status(422).json({ error: "Plz filled the field" })
    }

    try {
        const emailExist = await User.User.findOne({ where: { email } });
        const usernameExist = await User.User.findOne({ where: { username } });

        if (usernameExist) {
            return res.status(422).json({ error: "username already existed" })
        }
        if (emailExist) {
            return res.status(422).json({ error: "Email already existed" })
        }


        const salt = bcrypt.genSaltSync(10);
        const hashpassword = bcrypt.hashSync(password, salt)
        const userdata = {
            username: username,
            email: email,
            password: hashpassword
        }

        let user = await User.User.create(userdata)
        if (user) {
            res.status(201).json({ message: "user registered success" })
        }



    } catch (error) {
        console.log(error);
    }
}

module.exports = signupAuth

