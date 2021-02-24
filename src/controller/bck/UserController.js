const db = require('../../config/database')
const User = require('../../model/bck/User')

class UserController {

    async listUsers(req, res) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM BCK_USER')
            console.log(data[0])
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({error: 'Nenhum usuário cadastrado', response: []})

        } catch (error) {
            res.status(500).send({error: 'Erro no processo de requisição', response: error})
        }
    }

    async saveUser(req, res) {
        const conn = await db.connect()
        const sql = 'INSERT INTO BCK_USER (user_name, user_pass, user_phone, notes) VALUES (?, ?, ?, ?)'
        const values = [req.body.name, req.body.pass, req.body.phone, req.body.notes]
        console.log(values)
        let data = conn.query(sql, values)
        
        if(data != null)
            res.status(200).send('Usuário inserido com sucesso')
        else
            res.status(500).send({error: 'ERRO', response: null})
    }

}

module.exports = new UserController()