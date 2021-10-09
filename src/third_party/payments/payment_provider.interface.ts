import { Venda } from './../../models/mct/venda.model';
export interface PaymentProvider {

    vendaCredito(venda: Venda): any

}