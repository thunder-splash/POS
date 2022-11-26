const ProRouter = require ('express')
const router = new ProRouter()
const proController = require('../controllers/proController')

router.post('/create', proController.create)

module.exports = router