import jwt from 'jsonwebtoken'
import db from '../../config/database'
import arpmailer from '../../config/nodemailer'
import { Usuario } from '../../models/mct/usuario.model'
import { DataCrypt } from '../../utils/data-crypt'

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

            if(!data)
                return false

            await arpmailer.sendMail(this.generateLink(data), data)
            return true
        }catch(error) {
            return false
        }
    }

    async getUserFromCrypt(data: string) {
        try {
            const conn = await db.getConnection()
            const userData = this.decryptLink(data)
            let [resp] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_ID = ?', [userData.id])
            let foundUser = resp[0]

            if(!foundUser)
                throw new Error('Nenhum usuário encontrado')

            return foundUser
        } catch(error) {
            return null
        }
    }

    private generateLink(usuario: any): string {
        const dataCrypt = new DataCrypt()

        let linkData = {
            id: usuario.usuario_id,
            email: usuario.usuario_email
        }

        return dataCrypt.encrypt(JSON.stringify(linkData))
    }

    private decryptLink(data: string): any {
        const dataCrypt = new DataCrypt()

        let userData = JSON.parse(JSON.parse(dataCrypt.decrypt(data)))
        return userData
    }

}

export default new AuthServices()

