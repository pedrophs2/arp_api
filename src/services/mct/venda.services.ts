import { Venda } from './../../models/mct/venda.model';
import PaymentProvider  from "../../third_party/payments/payment_provider";

class VendaServices {

    async vendaCredito(venda: Venda): Promise<any> {
        try {
            let data = PaymentProvider.vendaCredito(venda)
            return data
        } catch(error) {
            console.log(error)
            return null
        }
    }

}

export default new VendaServices()