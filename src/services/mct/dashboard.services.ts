import moment = require('moment');
import db from '../../config/database'
import { Dashboard } from '../../models/mct/dashboard.model';

const ABERTO = 0
const CONCLUIDO = 1


class DashboardServices {

    public async mountDashboard(cdUsuario: number): Promise<Dashboard> {
        try {
            let dashboard: Dashboard = new Dashboard()
            dashboard.qtd_orcamentos = await this.getOrcamentos(cdUsuario)
            dashboard.qtd_clientes = await this.getClientesCadastrados(cdUsuario)
            dashboard.cd_ultimo_orcamento = await this.getCodUltimoOrcamento(cdUsuario)
            dashboard.qtd_orcamentos_abertos = await this.getOrcamentosAbertos(cdUsuario)
            dashboard.qtd_orcamentos_concluidos = await this.getOrcamentosConcluidos(cdUsuario)

            return dashboard
        } catch (error) {
            this.dealWith(error)
        }
    }

    private async getOrcamentos(cdUsuario: number): Promise<number> {
        try {
            const conn = await db.getConnection()

            let [resp]: any = await conn.query('SELECT COUNT(*) AS orcamentos FROM MCT_ORCAMENTO WHERE ORCAMENTO_ID_USUARIO = ?', [cdUsuario])

            let data = resp[0]

            if (data != undefined) {
                return data.orcamentos
            } else {
                return 0
            }

        } catch (error) {
            console.error('Data')
            return this.dealWith(error)
        }
    }

    private async getClientesCadastrados(cdUsuario: number): Promise<number> {
        try {
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT COUNT(*) AS clientes FROM MCT_CLIENTE WHERE CLIENTE_ID_USUARIO = ?', [cdUsuario])
            let data = resp[0]

            if (data != undefined) {
                return data.clientes
            } else {
                return 0
            }
        } catch(error) {
            console.error('Clientes')
            return this.dealWith(error)
        }
    }

    private async getCodUltimoOrcamento(cdUsuario: number): Promise<number> {
        try {
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT MAX(ORCAMENTO_ID) AS orcamento FROM MCT_ORCAMENTO WHERE ORCAMENTO_ID_USUARIO = ?', [cdUsuario])
            let data = resp[0]

            if(data != undefined){
                return data.orcamento
            } else {
                return null
            }
        } catch(error) {
            return this.dealWith(error)
        }
    }

    private async getOrcamentosAbertos(cdUsuario: number): Promise<number> {
        try {
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT COUNT(*) AS abertos FROM MCT_ORCAMENTO WHERE ORCAMENTO_ID_USUARIO = ? AND ORCAMENTO_CONCLUIDO = ?', [cdUsuario, ABERTO])
            let data = resp[0]

            if(data != undefined)
                return data.abertos
            else 
                return null
        } catch(error) {
            return this.dealWith(error)
        }
    }

    private async getOrcamentosConcluidos(cdUsuario: number): Promise<number> {
        try {
            const conn = await db.getConnection()
            let [resp]: any = await conn.query('SELECT COUNT(*) AS concluidos FROM MCT_ORCAMENTO WHERE ORCAMENTO_ID_USUARIO = ? AND ORCAMENTO_CONCLUIDO = ?', [cdUsuario, CONCLUIDO])
            let data = resp[0]

            if(data != undefined)
                return data.concluidos
            else 
                return null
        } catch(error) {
            return this.dealWith(error)
        }
    }

    private dealWith(error: any): any {
        console.error(`Erro no processo de requisição => ${error}`)
        return null
    }

}

export default new DashboardServices()