export class Cliente {
    cliente_id: number;
    cliente_id_usuario: number;
    cliente_cpf_cnpj: string
    cliente_nome: string;
    cliente_fone: string;
    cliente_endereco: string;
    cliente_logo: string;

    constructor(
        cliente_id: number,
        cliente_id_usuario: number,
        cliente_cpf_cnpj: string,
        cliente_nome: string,
        cliente_fone: string,
        cliente_endereco: string,
        cliente_logo: string
    ) {
        this.cliente_id = cliente_id;
        this.cliente_id_usuario = cliente_id_usuario;
        this.cliente_cpf_cnpj = cliente_cpf_cnpj
        this.cliente_nome = cliente_nome;
        this.cliente_fone = cliente_fone;
        this.cliente_endereco = cliente_endereco;
        this.cliente_logo = cliente_logo
    }
}
