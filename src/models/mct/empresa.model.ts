export class Empresa {
    cd_empresa: number
    cd_usuario: number
    ds_bairro: string
    ds_cep: string
    ds_endereco: string
    dt_atualizacao: Date
    dt_cadastro: Date
    nm_cidade: string
    nm_empresa: string
    nr_cnpj: string
    nr_telefone: string
    sg_uf: string


    constructor(
        cd_empresa: number,
        cd_usuario: number,
        ds_bairro: string,
        ds_cep: string,
        ds_endereco: string,
        dt_atualizacao: Date,
        dt_cadastro: Date,
        nm_cidade: string,
        nm_empresa: string,
        nr_cnpj: string,
        nr_telefone: string,
        sg_uf: string
    ) {
        this.cd_empresa = cd_empresa
        this.cd_usuario = cd_usuario
        this.ds_bairro = ds_bairro
        this.ds_cep = ds_cep
        this.ds_endereco = ds_endereco
        this.dt_atualizacao = dt_atualizacao
        this.dt_cadastro = dt_cadastro
        this.nm_cidade = nm_cidade
        this.nm_empresa = nm_empresa
        this.nr_cnpj = nr_cnpj
        this.nr_telefone = nr_telefone
        this.sg_uf = sg_uf
    }

}