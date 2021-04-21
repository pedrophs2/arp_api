const db = require('../../config/database')
const params = require('../../providers/QueryBuilder')

const columnsInsert = [
    'orcamento_id_cliente', 'orcamento_id_usuario', 'orcamento_nome', 'orcamento_total', 'orcamento_mo_interna',
    'orcamento_mo_externa', 'orcamento_disco', 'orcamento_copo_cone_60', 'orcamento_copo_cone_120',
    'orcamento_copo_reto_60', 'orcamento_copo_reto_120', 'orcamento_diamantada_50', 'orcamento_diamantada_100',
    'orcamento_diamantada_200', 'orcamento_velcro_220', 'orcamento_velcro_320', 'orcamento_velcro_400', 'orcamento_velcro_600',
    'orcamento_velcro_800', 'orcamento_velcro_1200', 'orcamento_massa_plastica', 'orcamento_dma', 'orcamento_resina',
    'orcamento_cola_cuba', 'orcamento_silicone', 'orcamento_estopa', 'orcamento_furos', 'orcamento_tubo_inox',
    'orcamento_distancia', 'orcamento_alimentacao', 'orcamento_desconto','orcamento_acrescimo', 'orcamento_imposto', 'orcamento_lucro', 'orcamento_valor_final'
]

class OrcamentoServices {

    async listOrcamentos() {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_ORCAMENTO')
            
            if(data[0] != undefined)
                return data
            else
                return null
            
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getOrcamentoById(id) {

        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [id])
            
            if(data[0] != undefined)
                return data[0]
            else
                return null

        } catch (error) {
            console.log(error)
            return null
        }
    }

    async createOrcamento(orcamento) {
        try {
            const conn = await db.connect()
            const query = `INSERT INTO MCT_ORCAMENTO (${params.buildParams(columnsInsert)}) VALUES (${params.buildParamsSlot(33)})`
            const values = [
                orcamento.orcamento_id_cliente, orcamento.orcamento_id_usuario, orcamento.orcamento_nome, orcamento.orcamento_total, 
                orcamento.orcamento_mo_interna, orcamento.orcamento_mo_externa, orcamento.orcamento_disco, orcamento.orcamento_copo_cone_60, 
                orcamento.orcamento_copo_cone_120, orcamento.orcamento_copo_reto_60, orcamento.orcamento_copo_reto_120, orcamento.orcamento_diamantada_50, 
                orcamento.orcamento_diamantada_100, orcamento.orcamento_diamantada_200, orcamento.orcamento_velcro_220, orcamento.orcamento_velcro_320, 
                orcamento.orcamento_velcro_400, orcamento.orcamento_velcro_600, orcamento.orcamento_velcro_800, orcamento.orcamento_velcro_1200, 
                orcamento.orcamento_massa_plastica, orcamento.orcamento_dma, orcamento.orcamento_resina, orcamento.orcamento_cola_cuba, 
                orcamento.orcamento_silicone, orcamento.orcamento_estopa, orcamento.orcamento_furos, orcamento.orcamento_tubo_inox, orcamento.orcamento_distancia,
                orcamento.orcamento_alimentacao, orcamento.orcamento_desconto,orcamento.orcamento_acrescimo, orcamento.orcamento_imposto, orcamento.orcamento_lucro, orcamento.orcamento_valor_final
            ]

            let data = await conn.query(query, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        }
    }

    async updateOrcamento(orcamento, id) {
        try{
            const conn = await db.connect()
            const query = ` UPDATE MCT_ORCAMENTO SET 
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
                            orcamento_valor_final = ?
                            WHERE orcamento_id = ?`

            const values = [
                orcamento.orcamento_nome, orcamento.orcamento_total, orcamento.orcamento_data, orcamento.orcamento_mo_interna,
                orcamento.orcamento_mo_externa, orcamento.orcamento_disco, orcamento.orcamento_copo_cone_60, orcamento.orcamento_copo_cone_120,
                orcamento.orcamento_copo_reto_60, orcamento.orcamento_copo_reto_120, orcamento.orcamento_diamantada_50, orcamento.orcamento_diamantada_100,
                orcamento.orcamento_diamantada_200, orcamento.orcamento_velcro_220, orcamento.orcamento_velcro_320, orcamento.orcamento_velcro_400, orcamento.orcamento_velcro_600,
                orcamento.orcamento_velcro_800, orcamento.orcamento_velcro_1200, orcamento.orcamento_massa_plastica, orcamento.orcamento_dma, orcamento.orcamento_resina,
                orcamento.orcamento_cola_cuba, orcamento.orcamento_silicone, orcamento.orcamento_estopa, orcamento.orcamento_furos, orcamento.orcamento_tubo_inox,
                orcamento.orcamento_distancia, orcamento.orcamento_alimentacao, orcamento.orcamento_desconto,orcamento.orcamento_acrescimo, orcamento.orcamento_imposto, orcamento.orcamento_lucro,
                orcamento.orcamento_valor_final, id
            ]

            let data = await conn.query(query, values)

            if(data != null)
                return true
            else
                return false

        } catch(error) {
            console.log(error)
            return false
        }
    }

    async deleteOrcamento(id) {
        try {
            const conn = await db.connect()
            let data = await conn.query('DELETE FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [id])

            if(data != undefined)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        }
    }
}

module.exports = new OrcamentoServices()