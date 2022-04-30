// 44. Importuojame Type (typeController.js)
const {Type} = require('../models/models')

// 45. Importuojame ApiError (typeController.js)
const ApiError = require('../error/ApiError')

class TypeController {
    // 46. Aprasome funkcija create Type (typeController.js)
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        // 47. Aprasome funkcija findAll Type (typeController.js)
        const types = await Type.findAll()
        return res.json(types)

    }

}

module.exports = new TypeController()