import jwt from 'jsonwebtoken'
import db from '../../config/database'
import arpmailer from '../../config/nodemailer'
import { Usuario } from '../../models/mct/usuario.model'

const USUARIO_ADMIN = 1
const EXPIRE_APP = 864000
const EXPIRE_ADM = 3600
class AuthServices {

    async login(user: Usuario) {

        try{
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [user.usuario_email])
            let data = resp[0]

            if(data != undefined){
                if(data.usuario_senha == user.usuario_senha){
                    const token = jwt.sign({userId: data.usuario_id}, process.env.JWT_HASH, {expiresIn: EXPIRE_APP})
                    console.log(`Usuário ${data.usuario_email} autenticado por ${(EXPIRE_APP/3600)/24} dias`)
                    return {signed: true, token, usuario: data}
                }else{
                    return {signed: false, token: null, usuario: null}
                }
            }

            return {signed: false, token: null, usuario: null}

        } catch(error) {
            return {signed: false, token: null, usuario: null}
        }
    }

    async adminLogin(user: Usuario) {
        try{
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ? AND USUARIO_CATEGORIA = ?', [user.usuario_email, USUARIO_ADMIN])
            let data = resp[0]

            if(data != undefined){
                if(data.usuario_senha == user.usuario_senha){
                    const token = jwt.sign({userId: data.usuario_id}, process.env.JWT_HASH, {expiresIn: EXPIRE_ADM})
                    console.log(`Usuário ${data.usuario_email} autenticado por ${(EXPIRE_ADM/3600)/24} hora(s)`)
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
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [usuario_email])
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

