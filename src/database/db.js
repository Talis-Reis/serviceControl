const mysql = require('mysql');
require('dotenv').config();
const env = process.env;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: process.env.DB_PORT
})

// connection.connect(()=>{
//     console.log('Conexão com o banco de dados. STATUS: SUCESSO!');
// })

connection.connect(function(err){
    if(err) {
        // mysqlErrorHandling(connection, err);
        console.log("\n\t *** Cannot establish a connection with the database. ***");
    }else {
        console.log("\n\t *** New connection established with the database. ***")
    }
});

module.exports = connection;