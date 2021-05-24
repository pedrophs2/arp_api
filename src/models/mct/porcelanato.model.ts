export class Porcelanato {
    porcelanato_id: number
    porcelanato_nome: string
    porcelanato_descricao: string
    porcelanato_valor: number
    porcelanato_imagem: any


    constructor(
        porcelanato_id: number, 
        porcelanato_nome: string, 
        porcelanato_descricao: string, 
        porcelanato_valor: number, 
        porcelanato_imagem: any
    ) {
        this.porcelanato_id = porcelanato_id
        this.porcelanato_nome = porcelanato_nome
        this.porcelanato_descricao = porcelanato_descricao
        this.porcelanato_valor = porcelanato_valor
        this.porcelanato_imagem = porcelanato_imagem
    }

}