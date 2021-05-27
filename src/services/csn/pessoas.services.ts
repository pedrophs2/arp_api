import db from '../../config/database'
import { Pessoa } from '../../models/csn/pessoa.model'
import handler from '../../utils/error-handler'

class PessoasServices {

    async listPessoasSemEscolha() {
        try {
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM CSN_PESSOA WHERE pessoa_id NOT IN (SELECT item_pessoa_id FROM CSN_ITENS WHERE item_pessoa_id IS NOT NULL)')

            if (data[0] != undefined)
                return data
            else
                return null
        } catch (error) {
            return handler.handleErrorData(error)
        } finally {
            db.disconnect()
        }
    }

    async createPessoa(pessoa: Pessoa) {
        try {
            const conn = await db.connect()
            const sql = 'INSERT INTO CSN_PESSOA (pessoa_nome) VALUES (?)'
            const values = [pessoa.pessoa_nome]

            let data = await conn.promise().query(sql, values)

            if (data != null)
                return true
            else
                return false
        } catch (error) {
            return handler.handleErrorBool(error)
        } finally {
            db.disconnect()
        }
    }

}

export default new PessoasServices()