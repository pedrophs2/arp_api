import { PorcelanatoOrcamento } from './../../models/mct/porcelanato-orcamento';
import db from '../../config/database'
import { Porcelanato } from '../../models/mct/porcelanato.model'

export class PorcelanatoOrcamentoServices {

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

}