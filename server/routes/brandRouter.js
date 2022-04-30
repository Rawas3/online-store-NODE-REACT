const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

// 33. Kuriame metoda POST brandui, kad sukurti brand (brandRouter.js)
router.post('/', brandController.create)

// 34. Kuriame metoda GET brandui, kad gauti visus brand (brandRouter.js)
router.get('/', brandController.getAll)


module.exports = router