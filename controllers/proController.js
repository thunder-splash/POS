const ApiError = require('../error/ApiError')
const {Projects} = require('../models/models')

class ProController {
    async create (req, res) {
        const {name} = req.body
        const proj = await Projects.create({name})
        return res.json(proj)
    }

    async getAll (req, res) {
        const pref = await Projects.findAll()
        return res.json(pref)
    }

    async getOne (req, res) {
        const {id} = req.params
        const ref = await Projects.findOne(
            {
                where: {id},
                include: [{model: Projects, as: 'info'}]
            }
        )
        return res.json(ref)
    }

    async delete (req, res, next) {
        const ToBeRemoved = req.body.name
        const pref = await Projects.destroy({where: {name: ToBeRemoved}})
        if (!pref){
            return next(ApiError.badRequest('Объект с таким именем не найден'))
        }
        return res.json({message: 'Объект удалён успешно'})
    }
}

module.exports = new ProController()