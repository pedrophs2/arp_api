import { CartaoCredito } from './cartao-credito.model';

export class Pagamento {
    tipo: string
    valor: number
    parcelas: number
    crypto: boolean
    cartaoCredito: CartaoCredito


    constructor(
        tipo: string, 
        valor: number, 
        parcelas: number, 
        crypto: boolean, 
        cartaoCredito: CartaoCredito
    ) {
        this.tipo = tipo
        this.valor = valor
        this.parcelas = parcelas
        this.crypto = crypto
        this.cartaoCredito = cartaoCredito
    }

}