import jwt from 'jsonwebtoken'

class JwtChecker {

    verifyJwt(req: any, res: any, next: any) {
        let jwtIgnore = Number(process.env.JWT_IGNORE)
        if(jwtIgnore) {
            next()
            return
        }

        const token = req.headers.authorization
        jwt.verify(token, process.env.JWT_HASH, (err: any, decoded: any) => {
            if(err) return res.status(401).send({error: 'Token Inválido ou Ausente'})
            next()
        })
    }

}

export default new JwtChecker()
