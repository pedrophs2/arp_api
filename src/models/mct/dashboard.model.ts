export class Dashboard {
    qtd_orcamentos: number
    qtd_clientes: number
    dt_atualizacao_valores: string
    cd_ultimo_orcamento: number
    plano_atual: number

    constructor(
        qtd_orcamentos?: number,
        qtd_clientes?: number,
        dt_atualizacao_valores?: string,
        cd_ultimo_orcamento?: number,
        plano_atual?: number
    ) {
        this.qtd_orcamentos = qtd_orcamentos
        this.qtd_clientes = qtd_clientes
        this.dt_atualizacao_valores = dt_atualizacao_valores
        this.cd_ultimo_orcamento = cd_ultimo_orcamento
        this.plano_atual = plano_atual
    }

}