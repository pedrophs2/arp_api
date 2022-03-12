import authFixService from "../../../services/mct/fix/auth.fix.service";

class AuthFixController {

    public async checkEncription(req: any, res: any) {
        let body = req.body
        let encryptedPassword = await authFixService.checkEncryption(body.data)
        res.status(200).send({data: encryptedPassword})
    }

}

export default new AuthFixController()