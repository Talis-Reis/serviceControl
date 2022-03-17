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
                first_name: item.first_name,
                last_name: item.last_name,
                user: item.user,
                email: item.email
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
            password: req.body.password,
            email: req.body.email, 
            is_admin: req.body.is_admin
        })

        json.result.push(createUser);

        res.json(json);
    }
}