import db from '../../config/database'
import { Pessoa } from '../../models/csn/pessoa.model'
import handler from '../../utils/error-handler'

class PessoasServices {

    async listPessoasSemEscolha() {
        try {
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM CSN_PESSOA WHERE PESSOA_ID NOT IN (SELECT ITEM_PESSOA_ID FROM CSN_ITENS WHERE ITEM_PESSOA_ID IS NOT NULL)')
            
            if(data[0] != undefined)
                return data
            else
                return null
        } catch (error) {
            return handler.handleErrorData(error)
        }
    }

    async createPessoa(pessoa: Pessoa) {
        try { 
            const conn = await db.connect()
            const sql = 'INSERT INTO CSN_PESSOA (PESSOA_NOME) VALUES (?)'
            const values = [pessoa.pessoa_nome]

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

export default new PessoasServices()