export class Usuario {
    usuario_cpf: string
    usuario_nome: string
    usuario_email: string
    usuario_senha: string
    usuario_fone: string
    usuario_orcamentos: number
    usuario_vip: boolean
    usuario_vip_dt_final: string

    constructor(
        usuario_cpf?: string,
        usuario_nome?: string,
        usuario_email?: string,
        usuario_senha?: string,
        usuario_fone?: string,
        usuario_orcamentos?: number,
        usuario_vip?: boolean,
        usuario_vip_dt_final?: string
    ) {
        this.usuario_cpf = usuario_cpf
        this.usuario_nome = usuario_nome
        this.usuario_email = usuario_email
        this.usuario_senha = usuario_senha
        this.usuario_fone = usuario_fone
        this.usuario_orcamentos = usuario_orcamentos
        this.usuario_vip = usuario_vip
        this.usuario_vip_dt_final = usuario_vip_dt_final
    }
}
