const userService = require('../service/UserService');

module.exports = {
    findAll: async(req, res) =>{
        let json = {
            error: '',
            result: []
        }
        let users = await userService.findAll();
        for(let item of users){
            json.result.push({
                ctrl_user: item.ctrl_user,
                name: item.first_name,
                user: item.user,
            });
        }
        res.json(json);
    },
    findById : async(req, res) =>{
        let json = {
            error: '',
            result: []
        }
        let user = await userService.findById(req.params.ctrl_user);

        json.result.push(user);
        res.json(json);
    },
    createUser: async(req, res) => {
        let json = {
            error: '',
            result: []
        }
        let createUser = await userService.createUser({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user: req.body.user,
            password: req.body.password
        })

        json.result.push(createUser);

        res.json(json);
    }
}