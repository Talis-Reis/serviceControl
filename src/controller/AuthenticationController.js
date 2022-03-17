const authenticationService = require('../service/AuthenticationService');

module.exports = {
    loginAuthentication: async (req, res) => {
        let json = {
            error: '',
            result: []
        }
        let login = await authenticationService.loginAuthentication({
            user: req.body.user, 
            password: req.body.password
        });
             json.result.push(login);
        
        res.json(json);
    }
}