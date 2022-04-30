const Router = require('express')
const router = new Router()
// 39. Importuojame userController (userRouter.js)
const userController = require('../controllers/userController')
// 67. Importuojame authMiddleware (userRouter.js)
const authMiddleware = require('../middleware/authMiddleware')

// 40. I kiekviena metoda router.post antru parametru perduodame atitinkama funkcija (userRouter.js)
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)



module.exports = router