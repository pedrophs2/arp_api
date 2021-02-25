const db = require('../../config/database')

class UsuarioController {

    async listUsers(req, res) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_USUARIO')
            
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
            let [data] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_ID = ?', [id])
            
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
            const sql = 'INSERT INTO MCT_USUARIO (USUARIO_NOME, USUARIO_EMAIL, USUARIO_SENHA, USUARIO_FONE, USUARIO_ORCAMENTOS, USUARIO_VIP) VALUES (?, ?, ?, ?, ?, ?)'
            const values = [user.nome, user.email, user.senha, user.fone, user.orcamentos, user.vip]

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
            const sql = 'UPDATE MCT_USUARIO SET USUARIO_NOME = ?, USUARIO_EMAIL = ?, USUARIO_SENHA = ?, USUARIO_FONE = ? WHERE USUARIO_ID = ?'
            const values = [user.nome, user.email, user.senha, user.fone, req.params.id]

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
            let data = await conn.query('DELETE FROM MCT_USER WHERE USUARIO_ID = ?', [id])

            if(data != undefined)
                res.status(200).send('Usuário excluído com sucesso')
            else
                res.status(500).send({error: 'Erro na exclusão do usuário'})

        } catch(error) {
            res.status(500).send({error: 'Erro na exclusão do usuário', response: error})
        }
    }

}

module.exports = new UsuarioController()