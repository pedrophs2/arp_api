import { Venda } from './../../models/mct/venda.model';
import CieloProvider from './cielo/service'

class PaymentProvider {

    public async vendaCredito(venda: Venda) {
        try {
            let response = await CieloProvider.vendaCredito(venda)
            return response
        } catch(error) {
            console.log(error)
        }
    }

}

export default new PaymentProvider()