const EmpRouter = require ('express')
const router = new EmpRouter()
const empController = require('../controllers/empController')

router.post('/registration', empController.registration)
router.post('/login', empController.login)
router.post('/destroy', empController.delete)
router.get('/',empController.seethemall)

module.exports = router