export class Plano {

    plano_id: number
    plano_nome: string
    plano_validade: number
    plano_valor: number

    constructor(
        plano_id?: number,
        plano_nome?: string,
        plano_validade?: number,
        plano_valor?: number
    ) {
        this.plano_id = plano_id
        this.plano_nome = plano_nome
        this.plano_validade = plano_validade
        this.plano_valor = plano_valor
    }

}