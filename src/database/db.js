const mysql = require('mysql');
const env = process.env;

const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    port: env.DB_PORT
});

connection.connect((error) => {
    if (error) throw error;
    console.log(`Conected DataBase: ${env.DB_NAME}`)
});

module.exports = connection;