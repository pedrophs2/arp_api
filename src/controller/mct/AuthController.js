const { restart } = require('nodemon')
const db = require('../../config/database')
const jwt = require('jsonwebtoken')
const hash = (require('../../config/jwt')).hash

class AuthController {


    async login(req, res) {
        let user = req.body

        try{
            const conn = await db.connect()
            let [resp] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [user.usuario_email])
            let data = resp[0]

            if(data != undefined){
                if(data.usuario_senha == user.usuario_senha){
                    const token = jwt.sign({userId: data.usuario_id}, hash, {expiresIn: 1800})
                    res.status(200).send({auth: true, token, usuario: data})
                }else{
                    res.status(401).send({auth:false, message: 'Usuário ou senha incorretos'})
                }
            } else {
                res.status(400).send({message:'Usuário ou senha incorretos'})
            }

        }catch(error) {
            res.status(500).send({message: 'Erro na requisição: ' + error, error: error})
        }
    }

}

module.exports = new AuthController()