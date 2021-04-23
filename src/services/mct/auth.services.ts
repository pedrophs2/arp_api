import jwt from 'jsonwebtoken'
import db from '../../config/database'
import { hash } from '../../config/jwt'
import arpmailer from '../../config/nodemailer'
import { Usuario } from '../../models/mct/usuario.model'

class AuthServices {

    async login(user: Usuario) {
        const expire = 864000

        try{
            const conn = await db.connect()
            let [resp] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [user.usuario_email])
            let data = resp[0]

            if(data != undefined){
                if(data.usuario_senha == user.usuario_senha){
                    const token = jwt.sign({userId: data.usuario_id}, hash, {expiresIn: expire})
                    console.log(`Usuário ${data.usuario_email} autenticado por ${(expire/3600)/24} dias`)
                    return {signed: true, token, usuario: data}
                }else{
                    return {signed: false, token: null, usuario: null}
                }
            } else {
                return {signed: false, token: null, usuario: null}
            }

        }catch(error) {
            console.log(error)
            return {signed: false, token: null, usuario: null}
        }
    }

    async forgot(usuario_email: string) {
        try {
            const conn = await db.connect()
            let [resp] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [usuario_email])
            let data = resp[0]

            if(data == undefined)
                return false

            let email = await arpmailer.sendMail(usuario_email, data.usuario_senha)
            return true
        }catch(error) {
            return false
        }
    }

}

export default new AuthServices()

