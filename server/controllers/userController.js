const ApiError = require('../error/ApiError')
// 58. Importuojame bcrypt, User, Basket (userController.js)
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')
// 62. Importuojame jwt-json web token (userController.js)
const jwt = require('jsonwebtoken')
// 64. Perrasom funkcija "jwt.sign" i "generateJwt"
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    // 59. Aprasome funkcija registration (userController.js)
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Neteisingas email arba password'))
        }
        // 60. Tikriname ar User jau yra sistemoje (userController.js)
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Vartotojas su tokiu email jau egzistuoja'))
        }
        // 61. Heshojame password ir kuriame nauja vartotoja
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    // 65. Aprasome funkcija "login" (userController.js)
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Vartotojas su tokiu email nerastas'))
        }
        // 66. Tikriname password atitikima (userController.js)
        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Nurodytas neteisingas password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    // 68. Perrasom funkcija "check" (userController.js)
    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()