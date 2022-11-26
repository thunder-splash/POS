const EmpRouter = require ('express')
const router = new EmpRouter()
const empController = require('../controllers/empController')

router.post('/registration', empController.registration)

module.exports = router