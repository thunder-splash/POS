const BpRouter = require ('express')
const router = new BpRouter ()
const bpController = require ('../controllers/bpController')
//const checkRoleMiddleware = require ('../middlewares/checkRoleMiddleware')

router.post('/create', bpController.create)
router.post('/delete', bpController.delete)
router.get('/:id', bpController.getOne)
router.get('/', bpController.getAll)
//router.get('/auth', checkRoleMiddleware, bpController.check,)

module.exports = router