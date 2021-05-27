import db from '../../config/database'
import { Usuario } from '../../models/mct/usuario.model'

class UsuarioServices {

    async listUsers() {
        try{
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM MCT_USUARIO')

            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.log(error)
            return null
        } finally {
            db.disconnect()
        }
    }

    async getUser(usuario_id: number) {
        try{
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM MCT_USUARIO WHERE usuario_id = ?', [usuario_id])

            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }

    async getUserByEmail(usuario_email: string) {
        try{
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM MCT_USUARIO WHERE usuario_email = ?', [usuario_email])

            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }

    async createUser(user: Usuario) {

        let check = await this.getUserByEmail(user.usuario_email)

        if(check != null)
            return false

        try {
            const conn = await db.connect()
            const sql = 'INSERT INTO MCT_USUARIO (usuario_cpf, usuario_nome, usuario_email, usuario_senha, usuario_fone, usuario_orcamentos, usuario_vip) VALUES (?, ?, ?, ?, ?, ?, ?)'
            const values = [user.usuario_cpf, user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, user.usuario_orcamentos, user.usuario_vip]

            let data = await conn.promise().query(sql, values)

            if(data != null)
                return true
            else
                return false

        }catch (error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }

    async updateUser(user: Usuario, usuario_id: number) {
        try{
            const conn = await db.connect()
            const sql = 'UPDATE MCT_USUARIO SET usuario_nome = ?, usuario_email = ?, usuario_senha = ?, usuario_fone = ? WHERE usuario_id = ?'
            const values = [user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, usuario_id]

            let data = await conn.promise().query(sql, values)

            if(data != null)
                return true
            else
                return false

        } catch(error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }


    async deleteUser(usuario_id: number) {
        try {
            const conn = await db.connect()
            let data = await conn.promise().query('DELETE FROM MCT_USUARIO WHERE usuario_id = ?', [usuario_id])

            if(data != undefined)
                return true
            else
                return false

        } catch(error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }

}

export default new UsuarioServices()
