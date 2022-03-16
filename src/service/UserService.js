const database = require('../database/db')

module.exports = {
    findAll: () => {
        return new Promise((acept, reject) => {
            database.query("SELECT * FROM users", (error, results) => {
                if (results) {
                    return acept(results);
                } else {
                    return reject(error)
                }
            });
        });
    },
    findById: (ctrl_user) => {
        return new Promise((sucess, error) => {
            database.query(`SELECT * FROM users WHERE ctrl_user = ${ctrl_user}`, (error, results) => {
                if (results) {
                    return sucess(results);
                } else {
                    return error(error)
                }
            })
        })
    },
    createUser: (user) => {
        console.log(user.password)
        return new Promise((sucess, error) => {
            database.query("INSERT INTO users(first_name, last_name, user, password) VALUES(" + '\'' + user.first_name + '\'' + "," + '\'' + user.last_name + '\'' + "," + '\'' + user.user + '\'' + "," + '\'' + user.password + '\'' + ")", (error, results) => {
                if (results) {
                    return sucess(results)
                } else {
                    return error(error);
                }
            })
        })
    }
};