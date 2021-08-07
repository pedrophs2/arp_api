export class Empresa {
    cdEmpresa: number
    cdUsuario: number
    dsBairro: string
    dsCep: string
    dsEndereco: string
    dtAtualizacao: Date
    dtCadastro: Date
    nmCidade: string
    nmEmpresa: string
    nrCnpj: string
    nrTelefone: string
    sgUf: string


    constructor(
        cdEmpresa: number,
        cdUsuario: number,
        dsBairro: string,
        dsCep: string,
        dsEndereco: string,
        dtAtualizacao: Date,
        dtCadastro: Date,
        nmCidade: string,
        nmEmpresa: string,
        nrCnpj: string,
        nrTelefone: string,
        sgUf: string
    ) {
        this.cdEmpresa = cdEmpresa
        this.cdUsuario = cdUsuario
        this.dsBairro = dsBairro
        this.dsCep = dsCep
        this.dsEndereco = dsEndereco
        this.dtAtualizacao = dtAtualizacao
        this.dtCadastro = dtCadastro
        this.nmCidade = nmCidade
        this.nmEmpresa = nmEmpresa
        this.nrCnpj = nrCnpj
        this.nrTelefone = nrTelefone
        this.sgUf = sgUf
    }

}