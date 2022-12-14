const ApiError = require('../error/ApiError')
const {About} = require('../models/models')


class AboController {
    async create (req, res) {
        const {name} = req.body
        const pref = await About.create({name})
        return res.json(pref)
    }

    async getAll (req, res) {
        const pref = await About.findAll()
        return res.json(pref)
    }

    async getOne (req, res) {
        const {id} = req.params
        const ref = await About.findOne(
            {
                where: {id},
                include: [{model: About, as: 'info'}]
            }
        )
        return res.json(ref)
    }

    async delete (req, res, next) {
        const ToBeRemoved = req.body.name
        const pref = await About.destroy({where: {name: ToBeRemoved}})
        if (!pref){
            return next(ApiError.badRequest('Объект с таким именем не найден'))
        }
        return res.json({message: 'Объект удалён успешно'})
    }
}

module.exports = new AboController()