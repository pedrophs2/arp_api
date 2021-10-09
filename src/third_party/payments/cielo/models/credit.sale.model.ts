import { CieloCustomerModel } from "./credit.customer.model"
import { CieloPaymentModel } from "./credit.payment.model"

export class CieloSaleModel {

    MerchantOrderId: string
    Customer: CieloCustomerModel
    Payment: CieloPaymentModel
    IsCryptoCurrencyNegotiation: boolean


    constructor(
        MerchantOrderId: string, 
        Customer: CieloCustomerModel, 
        Payment: CieloPaymentModel, 
        IsCryptoCurrencyNegotiation: boolean
    ) {
        this.MerchantOrderId = MerchantOrderId
        this.Customer = Customer
        this.Payment = Payment
        this.IsCryptoCurrencyNegotiation = IsCryptoCurrencyNegotiation
    }

}