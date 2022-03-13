import passCrypt from "../../../utils/pass-salt";
import db from '../../../config/database'
import { Usuario } from "../../../models/mct/usuario.model";

class AuthFix {

    public async checkEncryption(data: string) {
        try {
            const conn = await db.getConnection()
            let [usuarios] = await conn.query('SELECT * FROM MCT_USUARIO', [])
            
            usuarios.forEach((usuario: any) => {
                this.encryptPassword(usuario)
            })

            return usuarios
        } finally {
            console.log('yup, finished.')
        }
    }

    private async encryptPassword(usuario: any) {
        console.log('Under development...')
    }

}

export default new AuthFix()