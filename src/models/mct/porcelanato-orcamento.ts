export class PorcelanatoOrcamento {

    orcamento_id: number
    porcelanato_id: number
    porcelanato_qtd: number


    constructor(orcamento_id: number, porcelanato_id: number, porcelanato_qtd: number) {
        this.orcamento_id = orcamento_id
        this.porcelanato_id = porcelanato_id
        this.porcelanato_qtd = porcelanato_qtd
    }
}