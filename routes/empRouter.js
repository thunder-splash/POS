const EmpRouter = require ('express')
const router = new EmpRouter()
const empController = require('../controllers/empController')
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware')

router.post('/registration', empController.registration)
router.post('/login', empController.login)
router.post('/destroy', empController.delete)
router.get('/',empController.seethemall)
router.get('/:id', empController.getOne)
router.get('/auth', checkRoleMiddleware, empController.check)


module.exports = router