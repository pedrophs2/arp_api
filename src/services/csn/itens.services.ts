import db from '../../config/database'
import { Item } from '../../models/csn/item.model'
import handler from '../../utils/error-handler'

class ItensServices {

    async listPendentes() {
        try{
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM CSN_ITENS WHERE item_pessoa_id IS NULL', [])

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
            const conn = await db.connect()
            const sql = 'UPDATE CSN_ITENS SET item_pessoa_id = ? WHERE item_id = ?'
            const values = [id_pessoa, id_item]

            let data = await conn.promise().query(sql, values)

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