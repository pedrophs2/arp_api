const { restart } = require('nodemon')
const db = require('../../config/database')
const jwt = require('jsonwebtoken')
const hash = (require('../../config/jwt')).hash
const nodemailer = require('../../config/nodemailer')

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

    async createUser(req, res) {
        try {
            let user = req.body

            const conn = await db.connect()
            const sql = 'INSERT INTO MCT_USUARIO (usuario_nome, usuario_email, usuario_senha, usuario_fone, usuario_orcamentos, usuario_vip, usuario_categoria) VALUES (?, ?, ?, ?, ?, ?, ?)'
            const values = [user.usuario_nome, user.usuario_email, user.usuario_senha, user.usuario_fone, user.usuario_orcamentos, user.usuario_vip, user.usuario_categoria != undefined ? user.usuario_categoria : 0]

            console.log(values)
            let data = conn.query(sql, values)
            
            if(data != null)
                res.status(201).send('Usuário criado com sucesso')
            else
                res.status(400).send({message: 'Erro na criação de usuário', error: null})

        }catch (error) {
            res.status(500).send({message: 'ERRO: ', error: error})
        }
    }

    async forgot(req, res) {
        try {
            let data = await nodemailer.main(req.body.email, req.body.token)
            res.status(200).send(data)
        }catch(error) {
            res.status(500).send({message: 'Erro: ' + error, error: error})
        }
    }

}

module.exports = new AuthController()