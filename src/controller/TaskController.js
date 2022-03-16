const taskService = require('../service/TaskService');

module.exports = {
    // findAll: async(req, res) =>{
    //     let json = {
    //         error: '',
    //         result: []
    //     }
    //     let users = await taskService.findAll();

    //     for(let item of users){
    //         json.result.push({
    //             ctrl_user: users[item].ctrl_user,
    //             name: user[item].first_name,
    //             user: users[item].user,
    //         });
    //     }
    //     res.json(json);
    // }

    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let carros = await taskService.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }

        res.json(json);
    }
    
}