import { PorcelanatoOrcamento } from './../../models/mct/porcelanato-orcamento';
import db from '../../config/database'

class PorcelanatoOrcamentoServices {

    async createPorcelanatoOrcamento(porcelanatoOrcamento: PorcelanatoOrcamento): Promise<boolean> {
        const conn = await db.getConnection()

        try {
            const sql = `INSERT INTO MCT_ORCAMENTO_PORCELANATO (orcamento_id, porcelanato_id, porcelanato_qtd) values (?, ?, ?)`
            const values = [porcelanatoOrcamento.orcamento_id, porcelanatoOrcamento.porcelanato_id, porcelanatoOrcamento.porcelanato_qtd]

            const data = conn.query(sql, values)

            if (data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async getPorcelanatosByOrcamento(orcamento_id: number): Promise<PorcelanatoOrcamento[]> {
        const conn = await db.getConnection()

        try {
            const sql = `SELECT * FROM MCT_ORCAMENTO_PORCELANATO WHERE orcamento_id = ?`
            const values = [orcamento_id]

            const [data] = await conn.query(sql, values)
            
            if(data[0])
                return data
            else
                return []
        } catch(error) {
            console.log(error)
            return null
        }
    }

}

export default new PorcelanatoOrcamentoServices()