export class CartaoCredito {
    numero_cartao: string;
    nome_cartao: string;
    data_vencimento: string;
    cod_seguranca: string;
    bandeira: string;

    constructor(
        numero_cartao: string,
        nome_cartao: string,
        data_vencimento: string,
        cod_seguranca: string,
        bandeira: string
    ) {
        this.numero_cartao = numero_cartao;
        this.nome_cartao = nome_cartao;
        this.data_vencimento = data_vencimento;
        this.cod_seguranca = cod_seguranca;
        this.bandeira = bandeira;
    }
}
