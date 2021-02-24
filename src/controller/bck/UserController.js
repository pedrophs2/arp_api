const db = require('../../config/database')

class UserController {

    async listUsers(req, res) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM BCK_USER')
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({error: 'Nenhum usuário cadastrado', response: []})
            
        } catch (error) {
            res.status(500).send({error: 'Erro no processo de requisição', response: error})
        }
    }

    async getUser(req, res) {
        let id = req.params.id

        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM BCK_USER WHERE USER_ID = ?', [id])
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({error: 'Nenhum usuário encontrado', response: []})

        } catch (error) {
            res.status(500).send({error: 'Erro no processo de requisição', response: error})
        }
    }
    
    async createUser(req, res) {
        try {
            let user = req.body

            const conn = await db.connect()
            const sql = 'INSERT INTO BCK_USER (user_name, user_pass, user_phone, notes) VALUES (?, ?, ?, ?)'
            const values = [user.name, user.pass, user.phone, user.notes]

            let data = conn.query(sql, values)
            
            if(data != null)
                res.status(200).send('Usuário inserido com sucesso')
            else
                res.status(500).send({error: 'Erro na inserção de usuário', response: null})

        }catch (error) {
            res.status(500).send({error: 'ERRO: ', response: error})
        }
    }

    async updateUser(req, res) {        
        try{
            let user = req.body

            const conn = await db.connect()
            const sql = 'UPDATE BCK_USER SET USER_NAME = ?, USER_PASS = ?, USER_PHONE = ?, NOTES = ? WHERE USER_ID = ?'
            const values = [user.name, user.pass, user.phone, user.notes, req.params.id]

            let data = conn.query(sql, values)

            if(data != null)
                res.status(200).send('Usuário atualizado com sucesso')
            else
                res.status(500).send({error: 'Erro na atualização do usuário', response: null})

        } catch(error) {
            res.status(500).send({error: 'ERRO', response: error})
        }
    }


    async deleteUser(req, res) {
        let id = req.params.id

        try {
            const conn = await db.connect()
            let data = await conn.query('DELETE FROM BCK_USER WHERE USER_ID = ?', [id])

            if(data != undefined)
                res.status(200).send('Usuário excluído com sucesso')
            else
                res.status(500).send({error: 'Erro na exclusão do usuário'})

        } catch(error) {
            res.status(500).send({error: 'Erro na exclusão do usuário', response: error})
        }
    }

}

module.exports = new UserController()