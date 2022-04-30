// 31. Importuojame pagrindini routeri aplikacijai (routes/index.js)
const Router = require('express')

// 32. Kuriame "routerio" objekta (routes/index.js)
const router = new Router()

// 35. Importuojame visus routerius (routes/index.js)
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

// 36. Sujungiame marsrutus su routeriais (routes/index.js)
router.use('/device', deviceRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)

module.exports = router