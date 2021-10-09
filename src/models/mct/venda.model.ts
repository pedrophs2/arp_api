import { Pagamento } from './pagamento.model';
export class Venda {
    id_venda: string
    nome_cliente: any
    pagamento: Pagamento


    constructor(id_venda: string, nome_cliente: any, pagamento: Pagamento) {
        this.id_venda = id_venda
        this.nome_cliente = nome_cliente
        this.pagamento = pagamento
    }
}