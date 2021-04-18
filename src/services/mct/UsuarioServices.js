const db = require('../../config/database')

class UsuarioServices {

    async listUsers() {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_USUARIO')
            
            if(data[0] != undefined)
                return data
            else
                return null
            
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getUser(id) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_USUARIO WHERE usuario_id = ?', [id])
            
            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getUserByEmail(email) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_USUARIO WHERE usuario_email = ?', [email])
            
            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.log(error)
            return false
        }
    }

    async createUser(user) {

        let check = await this.getUserByEmail(user.usuario_email)

        if(check != null)
            return false

        try {
            const conn = await db.connect()
            const sql = 'INSERT INTO MCT_USUARIO (usuario_cpf, usuario_nome, usuario_email, usuario_senha, usuario_fone, usuario_orcamentos, usuario_vip) VALUES (?, ?, ?, ?, ?, ?, ?)'
            const values = [user.usuario_cpf, user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, user.usuario_orcamentos, user.usuario_vip]

            let data = await conn.query(sql, values)
            
            if(data != null)
                return true
            else
                return false

        }catch (error) {
            console.log(error)
            return false
        }
    }

    async updateUser(user, id) {        
        try{
            const conn = await db.connect()
            const sql = 'UPDATE MCT_USUARIO SET usuario_nome = ?, usuario_email = ?, usuario_senha = ?, usuario_fone = ? WHERE usuario_id = ?'
            const values = [user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, id]

            let data = await conn.query(sql, values)

            if(data != null)
                return true
            else
                return false

        } catch(error) {
            console.log(error)
            return false
        }
    }


    async deleteUser(id) {
        try {
            const conn = await db.connect()
            let data = await conn.query('DELETE FROM MCT_USUARIO WHERE usuario_id = ?', [id])

            if(data != undefined)
                return true
            else
                return false

        } catch(error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new UsuarioServices()