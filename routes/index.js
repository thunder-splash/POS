const Router = require ('express')
const router = new Router()
const empRouter = require ('./empRouter')
const aboRouter = require ('./aboRouter')
const proRouter = require ('./proRouter')
const bpRouter = require ('./bpRouter')

router.use('/employer', empRouter);
router.use('/about', aboRouter)
router.use('/projects', proRouter)
router.use('/offlist', bpRouter)

module.exports = router