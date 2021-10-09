import db from '../../config/database'

class PlanoServices {

    async listPlanos() {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query("SELECT * FROM MCT_PLANOS")
            console.log(data)

            if(data[0])
                return data
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async getPlano(plano_id: number) {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query("SELECT * FROM MCT_PLANOS WHERE plano_id = ?", [plano_id])

            if(data[0])
                return data
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

}

export default new PlanoServices()