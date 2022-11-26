const ProRouter = require ('express')
const router = new ProRouter()
const proController = require('../controllers/proController')
//const checkRoleMiddleware = require("../middlewares/checkRoleMiddleware")

router.post('/create', proController.create)
router.post('/delete', proController.delete)
router.get('/:id', proController.getOne)
router.get('/', proController.getAll)
//router.get('/auth', checkRoleMiddleware, proController.check,)

module.exports = router