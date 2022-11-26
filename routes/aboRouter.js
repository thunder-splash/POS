const AboRouter = require ('express')
const router = new AboRouter()
const aboController = require('../controllers/aboController')
//const checkRoleMiddleware = require("../middlewares/checkRoleMiddleware")

router.post('/create', aboController.create)
router.post('/delete', aboController.delete)
router.get('/:id', aboController.getOne)
router.get('/', aboController.getAll)
//router.get('/auth', checkRoleMiddleware, aboController.check,)

module.exports = router