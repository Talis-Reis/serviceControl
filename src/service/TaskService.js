const database = require('../database/db')

module.exports = {
    // findAll: () => {
    //     return new Promise((acept, reject) => {
    //         database.query("SELECT * FROM users", (error, results) => {
    //             if (error) { reject(error); return; }
    //             acept(results);
    //         });
    //     });
    // }
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            database.query('SELECT * FROM users', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};