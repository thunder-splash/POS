const Router = require ('express')
const router = new Router()
const empRouter = require ('./empRouter')

router.use('/employer', empRouter);

module.exports = router