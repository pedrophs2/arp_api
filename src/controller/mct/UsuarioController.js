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
            let [data] = await conn.query('SELECT * FROM MCT_USUARIO WHERE usuario_id = ?', [id])
            
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
            const sql = 'INSERT INTO MCT_USUARIO (usuario_nome, usuario_email, usuario_senha, usuario_fone, usuario_orcamentos, usuario_vip) VALUES (?, ?, ?, ?, ?, ?)'
            const values = [user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, user.usuario_orcamentos, user.usuario_vip]

            let data = conn.query(sql, values)
            
            if(data != null)
                res.status(201).send('Usuário inserido com sucesso')
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
            const sql = 'UPDATE MCT_USUARIO SET usuario_nome = ?, usuario_email = ?, usuario_senha = ?, usuario_fone = ? WHERE usuario_id = ?'
            const values = [user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, req.params.id]

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
            let data = await conn.query('DELETE FROM MCT_USUARIO WHERE usuario_id = ?', [id])

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