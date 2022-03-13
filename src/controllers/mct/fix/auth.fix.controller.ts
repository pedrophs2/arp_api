import authFixService from "../../../services/mct/fix/auth.fix.service";
import { Request, Response } from 'express'

class AuthFixController {

    public async checkEncription(req: Request, res: Response) {
        let body = req.body
        let encryptedPassword = await authFixService.checkEncryption(body.data)
        res.status(200).send({data: encryptedPassword})
    }

}

export default new AuthFixController()