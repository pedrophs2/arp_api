import db from '../../config/database'
import { Orcamento } from '../../models/mct/orcamento.model'
import { Porcelanato } from '../../models/mct/porcelanato.model'
import ImageProvider from '../../third_party/images/image.provider'
import orcamentoServices from './orcamento.services'

const filePath = 'mct/porcelanatos'
class PorcelanatoServices {

    async listPorcelanatos(): Promise<any[]> {
        try { 
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_PORCELANATO')

            if(data[0] != undefined)
                return data
            else
                return null

        } catch(error) {
            console.log(error)
            return null
        }
    }

    async getPorcelanato(porcelanato_id: number): Promise<Porcelanato>{
        try { 
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_PORCELANATO WHERE porcelanato_id = ?', [porcelanato_id])

            if(data[0] != undefined)
                return data[0]
            else
                return null

        } catch(error) {
            console.log(error)
            return null
        }
    }

    async createPorcelanato(porcelanato: Porcelanato): Promise<boolean> {
        try {
            porcelanato.porcelanato_imagem = await ImageProvider.upload(porcelanato.porcelanato_nome, porcelanato.porcelanato_imagem, filePath)
            const conn = await db.getConnection()
            const sql = 'INSERT INTO MCT_PORCELANATO (porcelanato_nome, porcelanato_descricao, porcelanato_valor, porcelanato_imagem) VALUES (?, ?, ?, ?)'
            const values = [porcelanato.porcelanato_nome, porcelanato.porcelanato_descricao, porcelanato.porcelanato_valor, porcelanato.porcelanato_imagem]

            let data = await conn.query(sql, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        }
    }

    async updatePorcelanato(porcelanato: Porcelanato, porcelanato_id: number): Promise<boolean> {
        try {
            porcelanato.porcelanato_imagem = await ImageProvider.upload(porcelanato.porcelanato_nome, porcelanato.porcelanato_imagem, filePath)
            const conn = await db.getConnection()
            const sql = 'UPDATE MCT_PORCELANATO SET porcelanato_nome = ?, porcelanato_descricao = ?, porcelanato_valor = ?, porcelanato_imagem = ? WHERE porcelanato_id = ?'
            const values = [porcelanato.porcelanato_nome, porcelanato.porcelanato_descricao, porcelanato.porcelanato_valor, porcelanato.porcelanato_imagem, porcelanato_id]

            let data = await conn.query(sql, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        }
    }

    async deletePorcelanato(porcelanato_id: number): Promise<boolean> {
        try {
            const conn = await db.getConnection()
            const sql = 'SELECT * FROM MCT_ORCAMENTO_PORCELANATO WHERE porcelanato_id = ?'
            const values = [porcelanato_id]

            let [data]: any = await conn.query(sql, values)

            if(data[0])
                throw Error('Não é possível excluir um porcelanato cadastrado em um orçamento')
            
            const deleteSql = 'DELETE FROM MCT_PORCELANATO WHERE PORCELANATO_ID = ?'
            
            let response = await conn.query(deleteSql, [porcelanato_id])
            if(response)
                return true
            
            return false
                
        } catch(error: any) {
            throw Error(error)
        }
    }
}

export default new PorcelanatoServices()