const { restart } = require('nodemon')
const db = require('../../config/database')

class AuthController {

    async login(req, res) {
        let user = req.body

        try{
            const conn = await db.connect()
            let [resp] = await conn.query('SELECT * FROM MCT_USUARIO WHERE USUARIO_EMAIL = ?', [user.usuario_email])
            let data = resp[0]

            if(data != undefined){
                if(data.usuario_senha == user.usuario_senha)
                    res.status(200).send(data)
                else
                    res.status(403).send('Usuário ou senha incorretos')
            } else {
                res.status(204).send('Usuário ou senha incorretos')
            }

        }catch(error) {
            res.status(500).send('Erro na requisição: ', error)
        }
    }

}

module.exports = new AuthController()