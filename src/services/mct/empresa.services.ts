import db from '../../config/database'
import { Empresa } from '../../models/mct/empresa.model'

class EmpresaServices {

    public async getEmpresas() {
        console.log('Got here !!')
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_EMPRESA')

            if(data[0])
                return data
            else
                return []

        } catch(error) {
            this.handleError(error)
        }
    }

    public async getEmpresaUsuario(cdUsuario: number) {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_EMPRESA WHERE cd_usuario = ?', [cdUsuario])

            if(data[0])
                return data[0]
            else
                return []
        } catch(error) {
            this.handleError(error)
        }
    }

    public async createEmpresa(empresa: Empresa) {
        try {
            const conn = await db.getConnection()
            const query = 'INSERT INTO MCT_EMPRESA (cd_usuario, nm_empresa, ds_endereco, ds_bairro, nm_cidade, sg_uf, ds_cep, nr_telefone, nr_cnpj) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const queryParams = [empresa.cd_usuario, empresa.nm_empresa, empresa.ds_endereco, empresa.ds_bairro, empresa.nm_cidade, empresa.sg_uf, empresa.ds_cep, empresa.nr_telefone, empresa.nr_cnpj]

            let [data]: any = await conn.query(query, queryParams)
            if(data)
                return data
            else
                return null
        } catch(error) {
            this.handleError(error)
        }
    }

    public async updateEmpresa(empresa: Empresa) {
        try {
            const conn = await db.getConnection()
            const query = 'UPDATE MCT_EMPRESA SET nm_empresa = ?, ds_endereco = ?, ds_bairro = ?, nm_cidade = ?, sg_uf = ?, ds_cep = ?, nr_telefone = ?, nr_cnpj = ? WHERE cd_empresa = ?'
            const queryParams = [empresa.nm_empresa, empresa.ds_endereco, empresa.ds_bairro, empresa.nm_cidade, empresa.sg_uf, empresa.ds_cep, empresa.nr_telefone, empresa.nr_cnpj, empresa.cd_empresa]

            let [data] = await conn.query(query, queryParams)

            if(data)
                return data
            else
                return null
        } catch(error) {
            this.handleError(error)
        }
    }

    private handleError(error: any): any {
        console.error(error)
        return null
    }

}

export default new EmpresaServices()