import PorcelanatoOrcamentoServices from './porcelanato-orcamento.services';
import db from '../../config/database'
import qb from '../../utils/query-builder'
import { orcamentoColumns } from '../../utils/fields/orcamento.fields'
import { orcamentoUpdateColumns } from '../../utils/fields/orcamento.fields'
import { Orcamento } from '../../models/mct/orcamento.model'

class OrcamentoServices {

    async listOrcamentos(usuario_id: number) {
        try{
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_ORCAMENTO WHERE orcamento_id_usuario = ?', [usuario_id])

            if(data[0] != undefined)
                return data
            else
                return null

        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getOrcamentoById(orcamento_id: number, usuario_id: number) {

        try{
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_ORCAMENTO WHERE orcamento_id = ? AND orcamento_id_usuario = ?', [orcamento_id, usuario_id])

            if(data[0] != undefined)
                return data[0]
            else
                return null

        } catch (error) {
            console.log(error)
            return null
        }
    }

    async createOrcamento(orcamento: Orcamento) {
        try {
            const conn = await db.getConnection()
            const query = `INSERT INTO MCT_ORCAMENTO (${qb.buildParams(orcamentoColumns)}) VALUES (${qb.buildParamsSlot(35)})`
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

            if(data != null){             
                orcamento.orcamento_id = data[0].insertId
                this.savePorcelanatoOrcamento(orcamento)
                return true
            }else{
                return false
            }
        } catch(error) {
            console.log(error)
            return false
        }
    }

    async updateOrcamento(orcamento: Orcamento, orcamento_id: number) {
        try{
            const conn = await db.getConnection()
            const query = `UPDATE MCT_ORCAMENTO SET ${qb.buildParams(orcamentoUpdateColumns)} WHERE orcamento_id = ?`

            const values = [
                orcamento.orcamento_id_cliente, orcamento.orcamento_nome, orcamento.orcamento_total, orcamento.orcamento_data, orcamento.orcamento_mo_interna,
                orcamento.orcamento_mo_externa, orcamento.orcamento_disco, orcamento.orcamento_copo_cone_60, orcamento.orcamento_copo_cone_120,
                orcamento.orcamento_copo_reto_60, orcamento.orcamento_copo_reto_120, orcamento.orcamento_diamantada_50, orcamento.orcamento_diamantada_100,
                orcamento.orcamento_diamantada_200, orcamento.orcamento_velcro_220, orcamento.orcamento_velcro_320, orcamento.orcamento_velcro_400, orcamento.orcamento_velcro_600,
                orcamento.orcamento_velcro_800, orcamento.orcamento_velcro_1200, orcamento.orcamento_massa_plastica, orcamento.orcamento_dma, orcamento.orcamento_resina,
                orcamento.orcamento_cola_cuba, orcamento.orcamento_silicone, orcamento.orcamento_estopa, orcamento.orcamento_furos, orcamento.orcamento_tubo_inox,
                orcamento.orcamento_distancia, orcamento.orcamento_alimentacao, orcamento.orcamento_desconto,orcamento.orcamento_acrescimo, orcamento.orcamento_imposto, orcamento.orcamento_lucro,
                orcamento.orcamento_valor_final, orcamento_id
            ]

            let data = await conn.query(query, values)

            if(data != null){
                this.savePorcelanatoOrcamento(orcamento)
                return true
            }else{
                return false
            }

        } catch(error) {
            console.log(error)
            return false
        }
    }

    async deleteOrcamento(orcamento_id: number) {
        try {
            const conn = await db.getConnection()
            let data = await conn.query('DELETE FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [orcamento_id])

            if(data != undefined)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        }
    }

    private async savePorcelanatoOrcamento(orcamento: Orcamento) {
        PorcelanatoOrcamentoServices.clearPorcelanatosOrcamento(orcamento.orcamento_id)
        if(orcamento.orcamento_porcelanatos){
                orcamento.orcamento_porcelanatos.forEach(porcelanato => {
                    porcelanato.orcamento_id = orcamento.orcamento_id
                    PorcelanatoOrcamentoServices.createPorcelanatoOrcamento(porcelanato)
                })
        }
    }

}

export default new OrcamentoServices()
