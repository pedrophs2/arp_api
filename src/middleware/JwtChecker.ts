import jwt from 'jsonwebtoken'
import { hash, useJWT } from '../config/jwt'

class JwtChecker {

    verifyJwt(req: any, res: any, next: any) {
        if(!useJWT) {
            next()
            return
        }

        const token = req.headers.authorization
        jwt.verify(token, hash, (err: any, decoded: any) => {
            if(err) return res.status(401).send({error: 'Token Inválido ou Ausente'})
            next()
        })
    }

}

export default new JwtChecker()
