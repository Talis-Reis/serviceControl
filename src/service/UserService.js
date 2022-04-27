const database = require("../database/db");

module.exports = {
    findAll: () => {
        return new Promise((resolved, rejected) => {
            database.query("SELECT * FROM users", (error, results) => {
                if (results) {
                    return resolved(results);
                } else {
                    return rejected(error);
                }
            });
        });
    },
    findById: (ctrl_user) => {
        return new Promise((resolved, rejected) => {
            database.query(
                `SELECT * FROM users WHERE ctrl_user = ${ctrl_user}`,
                (error, results) => {
                    if (error !== null && results.length) {
                        if (results) {
                            return resolved(results);
                        } else {
                            return rejected(error);
                        }
                    } else {
                        return rejected('Usuário não existe!')
                    }
                }
            );
        });
    },
    createUser: (user) => {
        return new Promise((resolved, rejected) => {
            user.is_admin == true ? (user.is_admin = 1) : (user.is_admin = 0);
            database.query(
                `SELECT * FROM users where email = '${user.email}'`,
                (error, results) => {
                    if (results.length) {
                        return resolved(
                            `Email: ${user.email} já cadastrado no banco de dados.`
                        );
                    } else {
                        database.query(
                            "INSERT INTO users(first_name, last_name, user, password, email, is_admin) VALUES(" +
                            "'" +
                            user.first_name +
                            "'" +
                            "," +
                            "'" +
                            user.last_name +
                            "'" +
                            "," +
                            "'" +
                            user.user +
                            "'" +
                            "," +
                            "'" +
                            user.password +
                            "'" +
                            "," +
                            "'" +
                            user.email +
                            "'" +
                            "," +
                            user.is_admin +
                            ")",
                            (error, results) => {
                                if (results) {
                                    return resolved(`Usuário ${user.first_name} criado com sucesso!`);
                                } else {
                                    return rejected(error);
                                }
                            }
                        );
                    }
                }
            );
        });
    },
    updateUser: (ctrl_user, user) => {
        return new Promise((resolved, rejected) => {

            checkUser = `SELECT * FROM users WHERE ctrl_user = ${ctrl_user}`;

            database.query(checkUser, (error, results) => {
                if (results.length) {
                    let query = "UPDATE users SET ";

                    for (let value in user) {
                        query = query + value + "=" + `'${user[value]}'` + ", ";
                    }
                    query = query + `WHERE ctrl_user = ${ctrl_user}`;
                    query = query.replace(", WHERE", " WHERE");

                    database.query(query, (error, results) => {
                        if (results) {
                            return resolved(`Usuário alterado com sucesso!`);
                        } else {
                            return rejected(`Desculpe houve algum erro com a alteração`, error);
                        }
                    });
                } else if (error === null && results.length === 0) {
                    return rejected(`Usuário informado não existe!`)
                } else {
                    return rejected(error);
                }
            })
        });
    },
    deleteUser: (user) => {
        return new Promise((resolved, rejected) => {
            let query = `DELETE FROM users WHERE ctrl_user = ${user.ctrl_user}`;

            database.query(query, (error, result) => {
                if (result) {
                    resolved("Usuário deletado com sucesso!");
                } else {
                    rejected(error, "Erro ao deletar usuario!");
                }
            });
        });
    },
};