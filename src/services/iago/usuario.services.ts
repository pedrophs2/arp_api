import db from '../../config/database'

class UsuarioServices {

    async listUsuarios() {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM IAGO_USUARIO')

            if(data[0] != undefined)
                return data
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

}

export default new UsuarioServices()