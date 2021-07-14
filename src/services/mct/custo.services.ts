import { Custos } from './../../models/mct/custos.model';
import db from '../../config/database'

class CustoServices {

    public async getCusto(usuarioId: number) {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_CUSTOS_USUARIO WHERE custos_id_usuario = ?', [usuarioId])

            if(data[0])
                return data[0]
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

    public async saveCusto(custo: Custos): Promise<boolean> {
        try {
            let update = await this.checkCusto(custo.custos_id_usuario)
            let valid: boolean
            if(update)
                valid = await this.updateCusto(custo)
            else    
                valid = await this.insertCusto(custo)
            
            return valid
        } catch(error) {
            console.log(error)
            return null
        }
    }

    private async insertCusto(custo: Custos): Promise<boolean> {
        try {
            const conn = await db.getConnection()
            const query = `INSERT INTO MCT_CUSTOS_USUARIO (custos_id_usuario, custos_mo_interna, custos_mo_externa, custos_disco_unidade, custos_disco_capacidade, custos_copo_cone_60_capacidade, custos_copo_cone_60_valor, custos_copo_cone_120_capacidade, custos_copo_cone_120_valor, custos_copo_reto_60_capacidade, custos_copo_reto_60_valor, custos_copo_reto_120_capacidade, custos_copo_reto_120_valor, custos_diamantada_50_capacidade, custos_diamantada_50_valor, custos_diamantada_100_capacidade, custos_diamantada_100_valor, custos_diamantada_200_capacidade, custos_diamantada_200_valor, custos_velcro_220_capacidade, custos_velcro_220_valor, custos_velcro_320_capacidade, custos_velcro_320_valor, custos_velcro_400_capacidade, custos_velcro_400_valor, custos_velcro_600_capacidade, custos_velcro_600_valor, custos_velcro_800_capacidade, custos_velcro_800_valor, custos_velcro_1200_capacidade, custos_velcro_1200_valor, custos_massa_plastica, custos_dma, custos_resina, custos_cola_cuba, custos_silicone, custos_estopa, custos_furos, custos_broca_valor, custos_tubo_inox, custos_distancia, custos_distancia_valor, custos_alimentacao, custos_maquinas_duracao, custos_maquinas_investimento, custos_ferramentas_duracao, custos_ferramentas_investimento, custos_servicos_mensais, custos_custo_fixo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

            const values = [custo.custos_id_usuario, custo.custos_mo_interna, custo.custos_mo_externa, custo.custos_disco_unidade, custo.custos_disco_capacidade, custo.custos_copo_cone_60_capacidade, custo.custos_copo_cone_60_valor, custo.custos_copo_cone_120_capacidade, custo.custos_copo_cone_120_valor, custo.custos_copo_reto_60_capacidade, custo.custos_copo_reto_60_valor, custo.custos_copo_reto_120_capacidade, custo.custos_copo_reto_120_valor, custo.custos_diamantada_50_capacidade, custo.custos_diamantada_50_valor, custo.custos_diamantada_100_capacidade, custo.custos_diamantada_100_valor, custo.custos_diamantada_200_capacidade, custo.custos_diamantada_200_valor, custo.custos_velcro_220_capacidade, custo.custos_velcro_220_valor, custo.custos_velcro_320_capacidade, custo.custos_velcro_320_valor, custo.custos_velcro_400_capacidade, custo.custos_velcro_400_valor, custo.custos_velcro_600_capacidade, custo.custos_velcro_600_valor, custo.custos_velcro_800_capacidade, custo.custos_velcro_800_valor, custo.custos_velcro_1200_capacidade, custo.custos_velcro_1200_valor, custo.custos_massa_plastica, custo.custos_dma, custo.custos_resina, custo.custos_cola_cuba, custo.custos_silicone, custo.custos_estopa, custo.custos_furos, custo.custos_broca_valor, custo.custos_tubo_inox, custo.custos_distancia, custo.custos_distancia_valor, custo.custos_alimentacao, custo.custos_maquinas_duracao, custo.custos_maquinas_investimento, custo.custos_ferramentas_duracao, custo.custos_ferramentas_investimento, custo.custos_servicos_mensais, custo.custos_custo_fixo]

            let data = await conn.query(query, values)

            if(data){
                custo.custos_id = data[0].insertId
                return true
            } else {
                return false
            }
        } catch(error) {
            console.log(error)
            return null
        }
    }

    private async updateCusto(custo: Custos): Promise<boolean> {
        try {
            const conn = await db.getConnection()
            const query = `UPDATE MCT_CUSTOS_USUARIO SET custos_mo_interna = ?, custos_mo_externa = ?, custos_disco_unidade = ?, custos_disco_capacidade = ?, custos_copo_cone_60_capacidade = ?, custos_copo_cone_60_valor = ?, custos_copo_cone_120_capacidade = ?, custos_copo_cone_120_valor = ?, custos_copo_reto_60_capacidade = ?, custos_copo_reto_60_valor = ?, custos_copo_reto_120_capacidade = ?, custos_copo_reto_120_valor = ?, custos_diamantada_50_capacidade = ?, custos_diamantada_50_valor = ?, custos_diamantada_100_capacidade = ?, custos_diamantada_100_valor = ?, custos_diamantada_200_capacidade = ?, custos_diamantada_200_valor = ?, custos_velcro_220_capacidade = ?, custos_velcro_220_valor = ?, custos_velcro_320_capacidade = ?, custos_velcro_320_valor = ?, custos_velcro_400_capacidade = ?, custos_velcro_400_valor = ?, custos_velcro_600_capacidade = ?, custos_velcro_600_valor = ?, custos_velcro_800_capacidade = ?, custos_velcro_800_valor = ?, custos_velcro_1200_capacidade = ?, custos_velcro_1200_valor = ?, custos_massa_plastica = ?, custos_dma = ?, custos_resina = ?, custos_cola_cuba = ?, custos_silicone = ?, custos_estopa, custos_furos = ?, custos_broca_valor = ?, custos_tubo_inox = ?, custos_distancia = ?, custos_distancia_valor = ?, custos_alimentacao = ?, custos_maquinas_duracao = ?, custos_maquinas_investimento = ?, custos_ferramentas_duracao = ?, custos_ferramentas_investimento = ?, custos_servicos_mensais = ?, custos_custo_fixo = ?  WHERE custos_id_usuario = ?`

            const values = [custo.custos_mo_interna, custo.custos_mo_externa, custo.custos_disco_unidade, custo.custos_disco_capacidade, custo.custos_copo_cone_60_capacidade, custo.custos_copo_cone_60_valor, custo.custos_copo_cone_120_capacidade, custo.custos_copo_cone_120_valor, custo.custos_copo_reto_60_capacidade, custo.custos_copo_reto_60_valor, custo.custos_copo_reto_120_capacidade, custo.custos_copo_reto_120_valor, custo.custos_diamantada_50_capacidade, custo.custos_diamantada_50_valor, custo.custos_diamantada_100_capacidade, custo.custos_diamantada_100_valor, custo.custos_diamantada_200_capacidade, custo.custos_diamantada_200_valor, custo.custos_velcro_220_capacidade, custo.custos_velcro_220_valor, custo.custos_velcro_320_capacidade, custo.custos_velcro_320_valor, custo.custos_velcro_400_capacidade, custo.custos_velcro_400_valor, custo.custos_velcro_600_capacidade, custo.custos_velcro_600_valor, custo.custos_velcro_800_capacidade, custo.custos_velcro_800_valor, custo.custos_velcro_1200_capacidade, custo.custos_velcro_1200_valor, custo.custos_massa_plastica, custo.custos_dma, custo.custos_resina, custo.custos_cola_cuba, custo.custos_silicone, custo.custos_estopa, custo.custos_furos, custo.custos_broca_valor, custo.custos_tubo_inox, custo.custos_distancia, custo.custos_distancia_valor, custo.custos_alimentacao, custo.custos_maquinas_duracao, custo.custos_maquinas_investimento, custo.custos_ferramentas_duracao, custo.custos_ferramentas_investimento, custo.custos_servicos_mensais, custo.custos_custo_fixo, custo.custos_id_usuario]

            let data = await conn.query(query, values)

            if(data)
                return true
            else    
                return false
        } catch(error) {
            console.log(error)
            return null
        }
    }

    private async checkCusto(idUsuario: number): Promise<boolean> {
        try {
            let custos = await this.getCusto(idUsuario)
            if (custos) return true
            
            return false            
        } catch(error) {
            console.log(error)
            return null
        }
    }

}

export default new CustoServices()