export class Dashboard {
    qtd_orcamentos: number
    qtd_orcamentos_abertos: number
    qtd_orcamentos_concluidos: number
    qtd_clientes: number
    dt_atualizacao_valores: string
    cd_ultimo_orcamento: number
    plano_atual: number

    constructor(
        qtd_orcamentos?: number,
        qtd_clientes?: number,
        dt_atualizacao_valores?: string,
        cd_ultimo_orcamento?: number,
        plano_atual?: number,
        qtd_orcamentos_abertos?: number,
        qtd_orcamentos_concluidos?: number
    ) {
        this.qtd_orcamentos = qtd_orcamentos
        this.qtd_clientes = qtd_clientes
        this.dt_atualizacao_valores = dt_atualizacao_valores
        this.cd_ultimo_orcamento = cd_ultimo_orcamento
        this.plano_atual = plano_atual
        this.qtd_orcamentos_abertos = qtd_orcamentos_abertos
        this.qtd_orcamentos_concluidos = qtd_orcamentos_concluidos
    }

}