const UserModel = require('../model/UserModel')

class UserController {
    
    async create(req, res) {
        const task = new UserModel(req.body)
        
        await task.save()
        .then( response => {
            return res.status(200).json(response)
        })
        .catch( error => {
            return res.status(500).json(error)
        })
    }

}

module.exports = new UserController()