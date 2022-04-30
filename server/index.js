// 5. Importuojame funkcija "config" kad serveris galetu nuskaityti faila .env (index.js)
require('dotenv').config()

// 1. Importuojame "express" moduli. (index.js)
const express = require('express')

// 8. Importuojame objekta is db.js (index.js)
const sequelize = require('./db')

// 27. Importuojame modulius is models.js (index.js)
const models = require('./models/models')

// 28. Importuojame "cors" kad atnaujinti uzklausas is brouser. (index.js)
const cors = require('cors')

// 37. Importuojame pagrindini routeri. (index.js)
const router = require('./routes/index')


// 3. Nurodome PORT ant kurio veiks projektas. (index.js)
const PORT = process.env.PORT || 5000

// 2. Kuriame objekta "express". Projekto paleidimas. (index.js)
const app = express()

// 43. Importuojame middleware. (index.js)
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

// 50. Importuojame fileUpload. (index.js)
const fileUpload = require('express-fileupload')

// 29. Perduodame funkcija "cors" i app. (index.js)
app.use(cors())

// 30. Perduodame funkcija "json" i app kad galima butu parse json formata. (index.js)
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

app.use(errorHandler)

// 9. Kvieciame funkcija prisijungimui prie duomenu bazes (index.js)
const start = async  () => {
    try {
        await sequelize.authenticate() // 11.
        await sequelize.sync() // 12.
        // 10. Perkeleme funkcija "listen" i vidu (index.js)
        // 4. Kvieciame funkcija "listen" (index.js)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

