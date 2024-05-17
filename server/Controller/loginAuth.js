const bcrypt = require('bcryptjs')
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')


const loginAuth = async (req, res) => {
    // const { username, password } = req.body
    // const user = await UserModel.User.findOne({ where: { username: req.body.username } })
    // if (!user) res.status(400).json({ error: "User doesn't exist" })

    // if (user && (user.validPassword(password, user.password))) {
    //     const token = jwt.sign({ userId: user.userID }, 'secretkey')
    //     await UserModel.Token.create({ token: token, userId: user.userID })
    //     res.cookie("access-token", token, { expires: new Date(Date.now() + 25892000000), httpOnly: true });
    //     res.status(200).json({ message: "Logged in Success", user: user.userID })
    // } else {
    //     res.status(401).send("invalid password and username");
    // }
    const { username, password } = req.body;

    const user = await UserModel.User.findOne({ where: { username } });

    if (!user) {
        return res.status(401).json({ error: 'Invalid login credentials' });
    }

    const passwordMatch = user.validPassword(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid login credentials' });
    }

    const token = jwt.sign({ userId: user.userID }, 'secretkey');
    await UserModel.Token.create({ token: token, userId: user.userID })
    res.cookie('token', token, { httpOnly: true, secure: false });
    res.status(200).json({ message: 'Login successful' });
}

// const loginAccess = (req, res, next)=>{
//     const access = req.cookie["access-token"]

//     if(!access) return res.status(400).json({error: "USER NOT AUTHENTICATED"})

//     try {
//         const validtoken = jwt.verify(access, 'secretkey')
//         if(validtoken){
//             req.authenticated=true
//             return next
//         }
//     } catch (error) {
//             return res.status(400).json({error: error})    
//     }
// }

const logout = async (req, res) => {
    const cookie = req.headers.cookie
    if (cookie) {
        const token = cookie.split('=')[1]
        const tokenData = await UserModel.Token.findOne({ where: { token } });

        if (tokenData != null) {
            await UserModel.Token.destroy({ where: { token } });
        }
        res.clearCookie('token', { path: '/' });
        res.status(200).send(token)
    }

}
module.exports = {
    loginAuth, logout
}
