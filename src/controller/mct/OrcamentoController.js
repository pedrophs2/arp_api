const db = require('../../config/database')
const params = require('../../providers/QueryBuilder')

const columns = [
                    'orcamento_nome', 'orcamento_total', 'orcamento_data', 'orcamento_mo_interna',
                    'orcamento_mo_externa', 'orcamento_disco', 'orcamento_copo_cone_60', 'orcamento_copo_cone_120',
                    'orcamento_copo_reto_60', 'orcamento_copo_reto_120', 'orcamento_diamantada_50', 'orcamento_diamantada_100',
                    'orcamento_diamantada_200', 'orcamento_velcro_220', 'orcamento_velcro_320', 'orcamento_velcro_400', 'orcamento_velcro_600',
                    'orcamento_velcro_800', 'orcamento_velcro_1200', 'orcamento_massa_plastica', 'orcamento_dma', 'orcamento_resina',
                    'orcamento_cola_cuba', 'orcamento_silicone', 'orcamento_estopa', 'orcamento_furos', 'orcamento_tubo_inox',
                    'orcamento_distancia', 'orcamento_alimentacao', 'orcamento_desconto','orcamento_acrescimo', 'orcamento_imposto', 'orcamento_lucro', 'orcamento_valor_final'
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
                res.status(200).send(data[0])
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
            const query = `INSERT INTO MCT_ORCAMENTO (${params.buildParams(columns)}) VALUES (${params.buildParamsSlot(34)})`
            const values = [
                orcamento.orcamento_nome, orcamento.orcamento_total, null, orcamento.orcamento_mo_interna,
                orcamento.orcamento_mo_externa, orcamento.orcamento_disco, orcamento.orcamento_copo_cone_60, orcamento.orcamento_copo_cone_120,
                orcamento.orcamento_copo_reto_60, orcamento.orcamento_copo_reto_120, orcamento.orcamento_diamantada_50, orcamento.orcamento_diamantada_100,
                orcamento.orcamento_diamantada_200, orcamento.orcamento_velcro_220, orcamento.orcamento_velcro_320, orcamento.orcamento_velcro_400, orcamento.orcamento_velcro_600,
                orcamento.orcamento_velcro_800, orcamento.orcamento_velcro_1200, orcamento.orcamento_massa_plastica, orcamento.orcamento_dma, orcamento.orcamento_resina,
                orcamento.orcamento_cola_cuba, orcamento.orcamento_silicone, orcamento.orcamento_estopa, orcamento.orcamento_furos, orcamento.orcamento_tubo_inox,
                orcamento.orcamento_distancia, orcamento.orcamento_alimentacao, orcamento.orcamento_desconto,orcamento.orcamento_acrescimo, orcamento.orcamento_imposto, orcamento.orcamento_lucro, orcamento.orcamento_valor_final
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
            const query = `UPDATE MCT_ORCAMENTO SET 
            orcamento_nome = ?,
            orcamento_total = ?,
            orcamento_data = ?,
            orcamento_mo_interna = ?,
            orcamento_mo_externa = ?,
            orcamento_disco = ?,
            orcamento_copo_cone_60 = ?,
            orcamento_copo_cone_120 = ?,
            orcamento_copo_reto_60 = ?,
            orcamento_copo_reto_120 = ?,
            orcamento_diamantada_50 = ?,
            orcamento_diamantada_100 = ?,
            orcamento_diamantada_200 = ?,
            orcamento_velcro_220 = ?,
            orcamento_velcro_320 = ?,
            orcamento_velcro_400 = ?,
            orcamento_velcro_600 = ?,
            orcamento_velcro_800 = ?,
            orcamento_velcro_1200 = ?,
            orcamento_massa_plastica = ?,
            orcamento_dma = ?,
            orcamento_resina = ?,
            orcamento_cola_cuba = ?,
            orcamento_silicone = ?,
            orcamento_estopa = ?,
            orcamento_furos = ?,
            orcamento_tubo_inox = ?,
            orcamento_distancia = ?,
            orcamento_alimentacao = ?,
            orcamento_desconto = ?,
            orcamento_acrescimo = ?,
            orcamento_imposto = ?,
            orcamento_lucro = ?,
            orcamento_valor_fina = ?
            WHERE orcamento_id = ?`
            const values = [
                orcamento.orcamento_nome, orcamento.orcamento_total, orcamento.orcamento_data, orcamento.orcamento_mo_interna,
                orcamento.orcamento_mo_externa, orcamento.orcamento_disco, orcamento.orcamento_copo_cone_60, orcamento.orcamento_copo_cone_120,
                orcamento.orcamento_copo_reto_60, orcamento.orcamento_copo_reto_120, orcamento.orcamento_diamantada_50, orcamento.orcamento_diamantada_100,
                orcamento.orcamento_diamantada_200, orcamento.orcamento_velcro_220, orcamento.orcamento_velcro_320, orcamento.orcamento_velcro_400, orcamento.orcamento_velcro_600,
                orcamento.orcamento_velcro_800, orcamento.orcamento_velcro_1200, orcamento.orcamento_massa_plastica, orcamento.orcamento_dma, orcamento.orcamento_resina,
                orcamento.orcamento_cola_cuba, orcamento.orcamento_silicone, orcamento.orcamento_estopa, orcamento.orcamento_furos, orcamento.orcamento_tubo_inox,
                orcamento.orcamento_distancia, orcamento.orcamento_alimentacao, orcamento.orcamento_desconto,orcamento.orcamento_acrescimo, orcamento.orcamento_imposto, orcamento.orcamento_lucro,
                orcamento.orcamento_valor_final, req.params.id
            ]

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