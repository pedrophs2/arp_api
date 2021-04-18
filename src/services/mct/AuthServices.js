const db = require('../../config/database')
const jwt = require('jsonwebtoken')
const hash = (require('../../config/jwt')).hash
const nodemailer = require('../../config/nodemailer')
const UsuarioServices = require('./UsuarioServices')

class AuthServices {

    async login(user) {
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
            return {signed: false, token: null, usuario: null}
        }
    }

    async createUser(user) {
        let check = await UsuarioServices.getUserByEmail(user.usuario_email)

        if(check != null)
            return false

        try {
            const conn = await db.connect()
            const sql = 'INSERT INTO MCT_USUARIO (usuario_cpf, usuario_nome, usuario_email, usuario_senha, usuario_fone, usuario_orcamentos, usuario_vip, usuario_categoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
            const values = [user.usuario_cpf, user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, user.usuario_orcamentos, user.usuario_vip, user.usuario_categoria != undefined ? user.usuario_categoria : 0]

            let data = await conn.query(sql, values)
            
            if(data != null)
                return true
            else
                return false

        }catch (error) {
            return false
        }
    }

    async forgot(usuario_email) {
        try {
            const conn = await db.connect()
            let [resp] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [usuario_email])
            let data = resp[0]
            
            if(data == undefined)
                return false

            let email = await nodemailer.main(usuario_email, data.usuario_senha)
            return true
        }catch(error) {
            return false
        }
    }

}

module.exports = new AuthServices()