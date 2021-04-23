export class Custos {
    id: number
    custos_mo_interna: number
    custos_mo_externa: number
    custos_disco_unidade: number
    custos_disco_capacidade: number
    custos_copo_cone_60_capacidade: number
    custos_copo_cone_60_valor: number
    custos_copo_cone_120_capacidade: number
    custos_copo_cone_120_valor: number
    custos_copo_reto_60_capacidade: number
    custos_copo_reto_60_valor: number
    custos_copo_reto_120_capacidade: number
    custos_copo_reto_120_valor: number
    custos_diamantada_50_capacidade: number
    custos_diamantada_50_valor: number
    custos_diamantada_100_capacidade: number
    custos_diamantada_100_valor: number
    custos_diamantada_200_capacidade: number
    custos_diamantada_200_valor: number
    custos_velcro_220_capacidade: number
    custos_velcro_220_valor: number
    custos_velcro_320_capacidade: number
    custos_velcro_320_valor: number
    custos_velcro_400_capacidade: number
    custos_velcro_400_valor: number
    custos_velcro_600_capacidade: number
    custos_velcro_600_valor: number
    custos_velcro_800_capacidade: number
    custos_velcro_800_valor: number
    custos_velcro_1200_capacidade: number
    custos_velcro_1200_valor: number
    custos_massa_plastica: number
    custos_dma: number
    custos_resina: number
    custos_cola_cuba: number
    custos_silicone: number
    custos_estopa: number
    custos_furos: number
    custos_broca_valor: number
    custos_tubo_inox: number
    custos_distancia: number
    custos_distancia_valor: number
    custos_alimentacao: number
    custos_maquinas_duracao: number
    custos_maquinas_investimento: number
    custos_ferramentas_duracao: number
    custos_ferramentas_investimento: number
    custos_servicos_mensais: number
    custos_custo_fixo

    constructor(
        id: number,
        custos_mo_interna: number,
        custos_mo_externa: number,
        custos_disco_unidade: number,
        custos_disco_capacidade: number,
        custos_copo_cone_60_capacidade: number,
        custos_copo_cone_60_valor: number,
        custos_copo_cone_120_capacidade: number,
        custos_copo_cone_120_valor: number,
        custos_copo_reto_60_capacidade: number,
        custos_copo_reto_60_valor: number,
        custos_copo_reto_120_capacidade: number,
        custos_copo_reto_120_valor: number,
        custos_diamantada_50_capacidade: number,
        custos_diamantada_50_valor: number,
        custos_diamantada_100_capacidade: number,
        custos_diamantada_100_valor: number,
        custos_diamantada_200_capacidade: number,
        custos_diamantada_200_valor: number,
        custos_velcro_220_capacidade: number,
        custos_velcro_220_valor: number,
        custos_velcro_320_capacidade: number,
        custos_velcro_320_valor: number,
        custos_velcro_400_capacidade: number,
        custos_velcro_400_valor: number,
        custos_velcro_600_capacidade: number,
        custos_velcro_600_valor: number,
        custos_velcro_800_capacidade: number,
        custos_velcro_800_valor: number,
        custos_velcro_1200_capacidade: number,
        custos_velcro_1200_valor: number,
        custos_massa_plastica: number,
        custos_dma: number,
        custos_resina: number,
        custos_cola_cuba: number,
        custos_silicone: number,
        custos_estopa: number,
        custos_furos: number,
        custos_broca_valor: number,
        custos_tubo_inox: number,
        custos_distancia: number,
        custos_distancia_valor: number,
        custos_alimentacao: number,
        custos_maquinas_duracao: number,
        custos_maquinas_investimento: number,
        custos_ferramentas_duracao: number,
        custos_ferramentas_investimento: number,
        custos_servicos_mensais: number,
        custos_custo_fixo: number
    ) {
        this.id = id
        this.custos_mo_interna = custos_mo_interna
        this.custos_mo_externa = custos_mo_externa
        this.custos_disco_unidade = custos_disco_unidade
        this.custos_disco_capacidade = custos_disco_capacidade
        this.custos_copo_cone_60_capacidade = custos_copo_cone_60_capacidade
        this.custos_copo_cone_60_valor = custos_copo_cone_60_valor
        this.custos_copo_cone_120_capacidade = custos_copo_cone_120_capacidade
        this.custos_copo_cone_120_valor = custos_copo_cone_120_valor
        this.custos_copo_reto_60_capacidade = custos_copo_reto_60_capacidade
        this.custos_copo_reto_60_valor = custos_copo_reto_60_valor
        this.custos_copo_reto_120_capacidade = custos_copo_reto_120_capacidade
        this.custos_copo_reto_120_valor = custos_copo_reto_120_valor
        this.custos_diamantada_50_capacidade = custos_diamantada_50_capacidade
        this.custos_diamantada_50_valor = custos_diamantada_50_valor
        this.custos_diamantada_100_capacidade = custos_diamantada_100_capacidade
        this.custos_diamantada_100_valor = custos_diamantada_100_valor
        this.custos_diamantada_200_capacidade = custos_diamantada_200_capacidade
        this.custos_diamantada_200_valor = custos_diamantada_200_valor
        this.custos_velcro_220_capacidade = custos_velcro_220_capacidade
        this.custos_velcro_220_valor = custos_velcro_220_valor
        this.custos_velcro_320_capacidade = custos_velcro_320_capacidade
        this.custos_velcro_320_valor = custos_velcro_320_valor
        this.custos_velcro_400_capacidade = custos_velcro_400_capacidade
        this.custos_velcro_400_valor = custos_velcro_400_valor
        this.custos_velcro_600_capacidade = custos_velcro_600_capacidade
        this.custos_velcro_600_valor = custos_velcro_600_valor
        this.custos_velcro_800_capacidade = custos_velcro_800_capacidade
        this.custos_velcro_800_valor = custos_velcro_800_valor
        this.custos_velcro_1200_capacidade = custos_velcro_1200_capacidade
        this.custos_velcro_1200_valor = custos_velcro_1200_valor
        this.custos_massa_plastica = custos_massa_plastica
        this.custos_dma = custos_dma
        this.custos_resina = custos_resina
        this.custos_cola_cuba = custos_cola_cuba
        this.custos_silicone = custos_silicone
        this.custos_estopa = custos_estopa
        this.custos_furos = custos_furos
        this.custos_broca_valor = custos_broca_valor
        this.custos_tubo_inox = custos_tubo_inox
        this.custos_distancia = custos_distancia
        this.custos_distancia_valor = custos_distancia_valor
        this.custos_alimentacao = custos_alimentacao
        this.custos_maquinas_duracao = custos_maquinas_duracao
        this.custos_maquinas_investimento = custos_maquinas_investimento
        this.custos_ferramentas_duracao = custos_ferramentas_duracao
        this.custos_ferramentas_investimento = custos_ferramentas_investimento
        this.custos_servicos_mensais = custos_servicos_mensais
        this.custos_custo_fixo = custos_custo_fixo
    }
}
