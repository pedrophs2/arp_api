import db from '../../config/database'
import { Item } from '../../models/csn/item.model'
import handler from '../../utils/error-handler'

class ItensServices {

    async listPendentes() {
        try{
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM CSN_ITENS WHERE item_pessoa_id IS NULL', [])

            if(data[0] != undefined)
                return data
            else
                return null
        } catch(error) {
            return handler.handleErrorData(error)
        }
    }

    async itemPicked(id_pessoa: number, id_item: number): Promise<boolean> {
        try{
            const conn = await db.getConnection()
            const sql = 'UPDATE CSN_ITENS SET item_pessoa_id = ? WHERE item_id = ?'
            const values = [id_pessoa, id_item]

            let data = await conn.query(sql, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            return handler.handleErrorBool(error)
        }
    }
}

export default new ItensServices()