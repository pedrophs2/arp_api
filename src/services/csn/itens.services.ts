import db from '../../config/database'
import { Item } from '../../models/csn/item.model'

class ItensServices {

    async listPendentes() {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM CSN_ITENS WHERE item_pessoa_id IS NULL', [])

            if(data[0] != undefined)
                return data
            else
                return null
        } catch(error) {
            this.handleErrorData(error)
        }
    }

    async itemPicked(id_pessoa: number, id_item: number): Promise<boolean> {
        try{
            const conn = await db.connect()
            const sql = 'UPDATE CSN_ITENS SET item_pessoa_id = ? WHERE item_id = ?'
            const values = [id_pessoa, id_item]

            let data = await conn.query(sql, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            this.handleErrorBool(error)
        }
    }

    private handleErrorData(error: any): Object {
        console.log(error)
        return null
    }

    private handleErrorBool(error: any): boolean {
        console.log(error)
        return false
    }

}

export default new ItensServices()