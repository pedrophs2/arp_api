export class CieloCreditCardModel {
    CardNumber: string
    Holder: string
    ExpirationDate: string
    SecurityCode: string
    Brand: string


    constructor(
        CardNumber: string, 
        Holder: string, 
        ExpirationDate: string, 
        SecurityCode: string, 
        Brand: string
    ) {
        this.CardNumber = CardNumber
        this.Holder = Holder
        this.ExpirationDate = ExpirationDate
        this.SecurityCode = SecurityCode
        this.Brand = Brand
    }

}