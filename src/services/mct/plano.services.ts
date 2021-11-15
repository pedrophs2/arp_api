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
                return data[0]
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async createPlano(plano: any) {
        try {
            const conn = await db.getConnection()
            let query = 'INSERT INTO MCT_PLANOS (plano_nome, plano_valor, plano_validade) VALUES (?, ?, ?)'
            let data = await conn.query(query, [plano.plano_nome, plano.plano_valor, plano.plano_validade])

            if(data)
                return true
            else
                return false
        } catch(error) {
            console.error(error)
            return false
        }
    }

}

export default new PlanoServices()