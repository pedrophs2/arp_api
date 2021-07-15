import { PorcelanatoOrcamento } from './porcelanato-orcamento';
import { Usuario } from "./usuario.model"

export class OrcamentoDTO {
    orcamento_id: number
    orcamento_id_usuario: number
    orcamento_id_cliente: number
    orcamento_nome: string
    orcamento_total: number
    orcamento_data: Date
    orcamento_mo_interna: number
    orcamento_mo_externa: number
    orcamento_disco: number
    orcamento_copo_cone_60: number
    orcamento_copo_cone_120: number
    orcamento_copo_reto_60: number
    orcamento_copo_reto_120: number
    orcamento_diamantada_50: number
    orcamento_diamantada_100: number
    orcamento_diamantada_200: number
    orcamento_velcro_220: number
    orcamento_velcro_320: number
    orcamento_velcro_400: number
    orcamento_velcro_600: number
    orcamento_velcro_800: number
    orcamento_velcro_1200: number
    orcamento_massa_plastica: number
    orcamento_dma: number
    orcamento_resina: number
    orcamento_cola_cuba: number
    orcamento_silicone: number
    orcamento_estopa: number
    orcamento_furos: number
    orcamento_tubo_inox: number
    orcamento_distancia: number
    orcamento_alimentacao: number
    orcamento_desconto: number
    orcamento_acrescimo: number
    orcamento_imposto: number
    orcamento_lucro: number
    orcamento_valor_final: number
    orcamento_usuario: Usuario
    orcamento_porcelanatos: PorcelanatoOrcamento[]

    constructor(
        orcamento_id: number,
        orcamento_id_usuario: number,
        orcamento_id_cliente: number,
        orcamento_nome: string,
        orcamento_total: number,
        orcamento_data: Date,
        orcamento_mo_interna: number,
        orcamento_mo_externa: number,
        orcamento_disco: number,
        orcamento_copo_cone_60: number,
        orcamento_copo_cone_120: number,
        orcamento_copo_reto_60: number,
        orcamento_copo_reto_120: number,
        orcamento_diamantada_50: number,
        orcamento_diamantada_100: number,
        orcamento_diamantada_200: number,
        orcamento_velcro_220: number,
        orcamento_velcro_320: number,
        orcamento_velcro_400: number,
        orcamento_velcro_600: number,
        orcamento_velcro_800: number,
        orcamento_velcro_1200: number,
        orcamento_massa_plastica: number,
        orcamento_dma: number,
        orcamento_resina: number,
        orcamento_cola_cuba: number,
        orcamento_silicone: number,
        orcamento_estopa: number,
        orcamento_furos: number,
        orcamento_tubo_inox: number,
        orcamento_distancia: number,
        orcamento_alimentacao: number,
        orcamento_desconto: number,
        orcamento_acrescimo: number,
        orcamento_imposto: number,
        orcamento_lucro: number,
        orcamento_valor_final: number,
        orcamento_usuario: Usuario,
        orcamento_porcelanatos ?: PorcelanatoOrcamento[]
    ) {
        this.orcamento_id = orcamento_id
        this.orcamento_id_usuario = orcamento_id_usuario
        this.orcamento_id_cliente = orcamento_id_cliente
        this.orcamento_nome = orcamento_nome
        this.orcamento_total = orcamento_total
        this.orcamento_data = orcamento_data
        this.orcamento_mo_interna = orcamento_mo_interna
        this.orcamento_mo_externa = orcamento_mo_externa
        this.orcamento_disco = orcamento_disco
        this.orcamento_copo_cone_60 = orcamento_copo_cone_60
        this.orcamento_copo_cone_120 = orcamento_copo_cone_120
        this.orcamento_copo_reto_60 = orcamento_copo_reto_60
        this.orcamento_copo_reto_120 = orcamento_copo_reto_120
        this.orcamento_diamantada_50 = orcamento_diamantada_50
        this.orcamento_diamantada_100 = orcamento_diamantada_100
        this.orcamento_diamantada_200 = orcamento_diamantada_200
        this.orcamento_velcro_220 = orcamento_velcro_220
        this.orcamento_velcro_320 = orcamento_velcro_320
        this.orcamento_velcro_400 = orcamento_velcro_400
        this.orcamento_velcro_600 = orcamento_velcro_600
        this.orcamento_velcro_800 = orcamento_velcro_800
        this.orcamento_velcro_1200 = orcamento_velcro_1200
        this.orcamento_massa_plastica = orcamento_massa_plastica
        this.orcamento_dma = orcamento_dma
        this.orcamento_resina = orcamento_resina
        this.orcamento_cola_cuba = orcamento_cola_cuba
        this.orcamento_silicone = orcamento_silicone
        this.orcamento_estopa = orcamento_estopa
        this.orcamento_furos = orcamento_furos
        this.orcamento_tubo_inox = orcamento_tubo_inox
        this.orcamento_distancia = orcamento_distancia
        this.orcamento_alimentacao = orcamento_alimentacao
        this.orcamento_desconto = orcamento_desconto
        this.orcamento_acrescimo = orcamento_acrescimo
        this.orcamento_imposto = orcamento_imposto
        this.orcamento_lucro = orcamento_lucro
        this.orcamento_valor_final = orcamento_valor_final
        this.orcamento_usuario = orcamento_usuario
        this.orcamento_porcelanatos = orcamento_porcelanatos
    }
}
