import ImageProvider from './../../third_party/images/image.provider';
import db from '../../config/database'
import { Usuario } from '../../models/mct/usuario.model'

const IMAGE_PATH = 'mct/usuarios'
class UsuarioServices {

    async listUsers() {
        try{
            const conn = await db.getConnection()
            let [data]: any = await conn.promise().query('SELECT * FROM MCT_USUARIO')

            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.error(error)
            return null
        }
    }

    async getUser(usuario_id: number) {
        try{
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_USUARIO WHERE usuario_id = ?', [usuario_id])

            if(data[0] != undefined)
                return data[0]
            else
                return null

        } catch (error) {
            console.error(error)
            return false
        }
    }

    async getUserByEmail(usuario_email: string) {
        try{
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_USUARIO WHERE usuario_email = ?', [usuario_email])

            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.error(error)
            return false
        }
    }

    async createUser(user: Usuario) {

        let check = await this.getUserByEmail(user.usuario_email)

        if(check != null)
            return false

        try {
            user.usuario_logo = await ImageProvider.upload(user.usuario_cpf, user.usuario_logo, IMAGE_PATH)

            const conn = await db.getConnection()
            const sql = 'INSERT INTO MCT_USUARIO (usuario_cpf, usuario_nome, usuario_email, usuario_senha, usuario_fone, usuario_orcamentos, usuario_vip, usuario_logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
            const values = [user.usuario_cpf, user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, user.usuario_orcamentos, user.usuario_vip, user.usuario_logo]

            let data = await conn.query(sql, values)

            if(data != null)
                return data[0].insertId
            else
                return 0

        }catch (error) {
            console.error(error)
            return -1
        }
    }

    async updateUser(user: Usuario, usuario_id: number) {
        try{
            user.usuario_logo = await ImageProvider.upload(user.usuario_cpf, user.usuario_logo, IMAGE_PATH)

            const conn = await db.getConnection()
            const sql = 'UPDATE MCT_USUARIO SET usuario_nome = ?, usuario_email = ?, usuario_fone = ?, usuario_logo = ?, usuario_cpf = ? WHERE usuario_id = ?'
            const values = [user.usuario_nome, user.usuario_email, user.usuario_fone, user.usuario_logo, user.usuario_cpf, usuario_id]

            let data = await conn.query(sql, values)
            console.log(data)

            if(data != null)
                return true
            else
                return false

        } catch(error) {
            console.error(error)
            return false
        }
    }


    async deleteUser(usuario_id: number) {
        try {
            const conn = await db.getConnection()
            let data = await conn.query('DELETE FROM MCT_USUARIO WHERE usuario_id = ?', [usuario_id])

            if(data != undefined)
                return true
            else
                return false

        } catch(error) {
            console.error(error)
            return false
        }
    }

}

export default new UsuarioServices()
