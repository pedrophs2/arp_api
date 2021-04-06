const db = require('../../config/database')
const params = require('../../providers/QueryBuilder')

const columns = [
                    'orcamento_nome', 'orcamento_total', 'orcamento_data', 'orcamento_mo_interna',
                    'orcamento_mo_externa', 'orcamento_distancia', 'orcamento_alimentacao', 'orcamento_furos',
                    'orcamento_massa_plastica', 'orcamento_cola_cuba', 'orcamento_silicone', 'orcamento_estopa',
                    'orcamento_resina', 'orcamento_dma', 'orcamento_disco', 'orcamento_tubo_inox', 'orcamento_lixa_220',
                    'orcamento_lixa_320', 'orcamento_lixa_400', 'orcamento_lixa_600', 'orcamento_lixa_50', 'orcamento_lixa_100',
                    'orcamento_lixa_60', 'orcamento_copo_60', 'orcamento_copo_120', 'orcamento_desconto', 'orcamento_acrescimo',
                    'orcamento_lucro', 'orcamento_valor_final'
                ]

class OrcamentoController {

    async listOrcamentos(req, res) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_ORCAMENTO')
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Nenhum usuário cadastrado', response: []})
            
        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async getOrcamentoById(req, res) {
        let id = req.params.id

        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [id])
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createOrcamento(req, res) {
        let orcamento = req.body

        try {
            const conn = await db.connect()
            const query = `INSERT INTO MCT_ORCAMENTO (${params.buildParams(columns)}) VALUES (${params.buildParamsSlot(29)})`
            const values = [
                orcamento.orcamento_nome, orcamento.orcamento_total, orcamento.orcamento_data, orcamento.orcamento_mo_interna,
                orcamento.orcamento_externa, orcamento.orcamento_distancia, orcamento.orcamento_alimentacao, orcamento.orcamento_furos,
                orcamento.orcamento_massa_plastica, orcamento.orcamento_cola_cuba, orcamento.orcamento_silicone, orcamento.orcamento_estopa,
                orcamento.orcamento_resina, orcamento.orcamento_dma, orcamento.orcamento_disco, orcamento.orcamento_tubo_inox, orcamento.orcamento_lixa_220,
                orcamento.orcamento_lixa_320, orcamento.orcamento_lixa_400, orcamento.orcamento_lixa_600, orcamento.orcamento_lixa_50, 
                orcamento.orcamento_lixa_50, orcamento.orcamento_lixa_100, orcamento.orcamento_lixa_60, orcamento.orcamento_copo_60,
                orcamento.orcamento_copo_120, orcamento.orcamento_desconto, orcamento.orcamento_acrescimo, orcamento.orcamento_lucro, orcamento.orcamento_valor_final
            ]

            let data = await conn.query(query, values)

            if(data != null)
                res.status(201).send('Orçamento criado com sucesso')
            else
                res.status(400).send({message: 'Erro na inserção do orçamento'})
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição: ', error: error})
        }
    }

    async updateOrcamento(req, res) {
        let orcamento = req.body

        try{
            const conn = await db.connect()
            const query = 'UPDATE MCT_ORCAMENTO SET orcamento_total = ?, campos_json = ? WHERE orcamento_id = ?'
            const values = [orcamento.orcamento_total, orcamento.campos_json, req.params.id]

            let data = await conn.query(query, values)

            if(data != null)
                res.status(201).send('Orçamento atualizado')
            else
                res.status(400).send('Erro na atualização do orçamento')
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição', error: error})
        }
    }

    async deleteOrcamento(req, res) {
        let id = req.params.id

        try {
            const conn = await db.connect()
            let data = await conn.query('DELETE FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [id])

            if(data != undefined)
                res.status(200).send('Orçamento excluído com sucesso')
            else
                res.status(400).send('Erro na exclusão do orçamento')
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição de dados', error: error})
        }
    }

}

module.exports = new OrcamentoController()