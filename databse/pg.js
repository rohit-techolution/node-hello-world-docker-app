require('dotenv').config();
const Pool = require('pg').Pool


const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

function getAll(callback) {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.log(error);
            throw error
        }
        callback(results.rows);
    })
}

function getByName(name, callback) {
    db.query('SELECT * FROM users WHERE name = $1', [name], (error, results) => {
        if (error) {
            throw error
        }
        callback(results.rows);
    })
}

module.exports = {
    db: db,
    getAll: getAll,
    getByName: getByName
};
