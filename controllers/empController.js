const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Employer} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class EmpController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный пароль или почтовый адрес!'))
        }
        const candidate = await Employer.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким почтовым адесом уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 13)
        const employer = await Employer.create({email, password: hashPassword})
        const token = generateJwt(employer.id, employer.email, employer.role)
        return res.json({token})
    }

}

module.exports = new EmpController()