import { CieloSaleModel } from './models/credit.sale.model';
import { CieloPaymentModel } from './models/credit.payment.model';
import { CieloCreditCardModel } from './models/credit.card.model';
import { CieloCustomerModel } from './models/credit.customer.model';
import { Venda } from './../../../models/mct/venda.model';

export class CieloBuilder {

    dadosVenda: Venda

    constructor(dadosVenda: Venda) {
        this.dadosVenda = dadosVenda
    }

    public buildVenda() {
        return new CieloSaleModel(
            this.dadosVenda.id_venda,
            this.buildCustomer(this.dadosVenda),
            this.buildPayment(this.dadosVenda),
            false
        )
    }

    private buildCustomer(dadosVenda: Venda) {
        return new CieloCustomerModel(dadosVenda.nome_cliente)
    }

    private buildCard(dadosVenda: Venda) {
        return new CieloCreditCardModel(
            dadosVenda.pagamento.cartaoCredito.numero_cartao,
            dadosVenda.pagamento.cartaoCredito.nome_cartao,
            dadosVenda.pagamento.cartaoCredito.data_vencimento,
            dadosVenda.pagamento.cartaoCredito.cod_seguranca,
            dadosVenda.pagamento.cartaoCredito.bandeira
        )
    }

    private buildPayment(dadosVenda: Venda) {
        return new CieloPaymentModel(
            'CreditCard', 
            dadosVenda.pagamento.valor, 
            1, 
            '', 
            this.buildCard(dadosVenda)
        )
    }

}