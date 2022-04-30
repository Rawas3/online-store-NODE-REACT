// 6. Konfigurojame duomenu baze (db.js)
const {Sequelize} = require('sequelize')

// 7. Eksportuojame objekta kuri kuriame is "Sequelize" klases.
// Konfiguruojame objekta. (db.js)
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)