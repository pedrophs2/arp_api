import jwt from 'jsonwebtoken'
import db from '../../config/database'
import arpmailer from '../../config/nodemailer'
import { Usuario } from '../../models/mct/usuario.model'
import crypto from 'crypto'

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

            // let email = await arpmailer.sendMail(usuario_email, data.usuario_senha)
            this.generateLink(data)
            return true
        }catch(error) {
            return false
        }
    }

    private async generateLink(usuario: any) {
        const algorithm = process.env.CRYPT_ALG
        const key = Buffer.from(process.env.CRYPT_KEY, 'hex')
        const iv = Buffer.from(process.env.CRYPT_IV, 'hex')

        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
        let encrypted = cipher.update(JSON.stringify(usuario))
        encrypted = Buffer.concat([encrypted, cipher.final()])
        console.log(encrypted.toString('hex'))
        this.decryptLink(encrypted.toString('hex'))
    }

    private async decryptLink(link: string) {
        const iv = Buffer.from(process.env.CRYPT_IV, 'hex');
        let encryptedText = Buffer.from(link, 'hex');
        let decipher = crypto.createDecipheriv(process.env.CRYPT_ALG, Buffer.from(process.env.CRYPT_KEY, 'hex'), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        console.log(JSON.parse(decrypted.toString()))
    
    }

}

export default new AuthServices()

