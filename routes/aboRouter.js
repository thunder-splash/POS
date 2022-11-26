const AboRouter = require ('express')
const router = new AboRouter()
const aboController = require('../controllers/aboController')

router.post('/create', aboController.create)

module.exports = router