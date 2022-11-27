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
        const employer = await Employer.create({email, password: hashPassword, role})
        const token = generateJwt(employer.id, employer.email, employer.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const employer = await Employer.findOne({where: {email}})
        if (!employer) {
            return next(ApiError.internal('Пользователь с таким логином не найден!'))
        }
        let comparePassword = bcrypt.compareSync(password, employer.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль!'))
        }
        const token = generateJwt(employer.id, employer.email, employer.role)
        return res.json({token})
    }

    async check(req, res) {
            const token = generateJwt(req.employer.id, req.employer.email, req.employer.role)
            return res.json({token})
    }

    async delete(req, res, next) {
        const ToBeRemoved = req.body.email
        const employer = await Employer.destroy({where: {email: ToBeRemoved}})
        if (!employer) {
            return next(ApiError.badRequest('Пользователь с такой почтой не найден'))
        }
        return res.json({message: 'Пользователь удалён успешно'})
    }

    async getOne (req, res) {
        const {id} = req.params
        const ref = await Employer.findOne(
            {
                where: {id},
                include: [{model: Employer, as: 'info'}]
            }
        )
        return res.json(ref)
    }

    async seethemall(req, res) {
        const isee = await Employer.findAll()
        return res.json(isee)
    }
}

module.exports = new EmpController()