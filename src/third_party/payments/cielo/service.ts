import { Venda } from '../../../models/mct/venda.model';
import { PaymentProvider } from './../payment_provider.interface';

import credentials from './config'
import axios from 'axios'
import stringer from 'querystring'
import { CieloBuilder } from './builder'

class CieloProvider implements PaymentProvider {

    async vendaCredito(venda: any) {
        try {
            let sale = new CieloBuilder(venda).buildVenda()

            const headers: any = {
                MerchantId: `${credentials.merchantId}`,
                MerchantKey: `${credentials.merchantKey}`
            }

            let res = await axios.post(`${credentials.host}/1/sales`, sale, {headers: headers}).then(response => {
                return response.data.Payment
            }).catch(error => {
                return error
            })

            return { code: res.ReturnCode, message: res.ReturnMessage, status: res.ReturnCode != 4 ? 400 : 201}
        } catch(error) {
            console.log(error)
        }
    }

}

export default new CieloProvider()
