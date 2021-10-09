import { CieloCreditCardModel } from "./credit.card.model"

export class CieloPaymentModel {
    Type: string
    Amount: number
    Installments: number
    SoftDescriptor: string
    CreditCard: CieloCreditCardModel

    constructor(
        Type: string, 
        Amount: number, 
        Installments: number, 
        SoftDescriptor: string, 
        CreditCard: CieloCreditCardModel
    ) {
        this.Type = Type
        this.Amount = Amount
        this.Installments = Installments
        this.SoftDescriptor = SoftDescriptor
        this.CreditCard = CreditCard
    }   
}