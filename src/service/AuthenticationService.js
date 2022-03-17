const database = require('../database/db')

module.exports = {
    loginAuthentication: (credentials) => {
        console.log(credentials.user, credentials.password)
        return new Promise((sucess, reject) => {
            database.query(`SELECT * FROM users WHERE user =  '${credentials.user}' AND password = '${credentials.password}'`, (error, results) => {
                console.log(results)
                if (results.length != 0) {
                    return sucess(`${credentials.user} Authenticated`);
                }else{
                    return sucess('Refused')
                }
            });
        });
    }
}