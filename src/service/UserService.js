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
        return new Promise((sucess, erro) => {
            database.query(`SELECT * FROM users WHERE ctrl_user = ${ctrl_user}`, (error, results) => {
                if (results) {
                    return sucess(results);
                } else {
                    return erro(error)
                }
            })
        })
    },
    createUser: (user) => {
        return new Promise((sucess, erro) => {
            user.is_admin == true ? user.is_admin = 1 : user.is_admin = 0;
            database.query(`SELECT * FROM users where email = '${user.email}'`, (error, results) => {
                if (results.length) {
                    return sucess(`Email: ${user.email} já cadastrado no banco de dados.`)
                } else {
                        database.query("INSERT INTO users(first_name, last_name, user, password, email, is_admin) VALUES(" + '\'' + user.first_name + '\'' + "," + '\'' + user.last_name + '\'' + "," + '\'' + user.user + '\'' + "," + '\'' + user.password + '\'' + "," + '\'' + user.email + '\'' + "," + user.is_admin + ")", (error, results) => {
                        if (results) {
                            return sucess(results)
                        } else {
                            return erro(error);
                        }
                    })
                }
            })
        })
    }
};