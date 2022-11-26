const ApiError = require('../error/ApiError')
const {BlackPage} = require('../models/models')


class BPController {
    async create (req, res) {
        const {name} = req.body
        const pref = await BlackPage.create({name})
        return res.json(pref)
    }

    async getAll (req, res) {
        const pref = await BlackPage.findAll()
        return res.json(pref)
    }

    async getOne (req, res) {
        const {id} = req.params
        const ref = await BlackPage.findOne(
            {
                where: {id},
                include: [{model: BlackPage, as: 'info'}]
            }
        )
        return res.json(ref)
    }

    async delete (req, res, next) {
        const ToBeRemoved = req.body.name
        const pref = await BlackPage.destroy({where: {name: ToBeRemoved}})
        if (!pref){
            return next(ApiError.badRequest('Объект с таким именем не найден'))
        }
        return res.json({message: 'Объект удалён успешно'})
    }
}

module.exports = new BPController()