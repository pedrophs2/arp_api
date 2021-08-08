import { Empresa } from '../../models/mct/empresa.model'
import EmpresaServices from '../../services/mct/empresa.services'

class EmpresaController {

    public async getEmpresas(req: any, res: any) {
        try {
            let responseData = await EmpresaServices.getEmpresas()

            if(responseData)
                res.status(200).send(responseData)
            else
                res.status(401).send({message: 'Nenhuma empresa encontrada'})
        } catch(error) {
            console.error(error)
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

    public async getEmpresasByUsuario(req: any, res: any) {
        try {
            let responseData = await EmpresaServices.getEmpresaUsuario(req.params.cd_usuario)

            if(responseData)
                res.status(200).send(responseData)
            else
                res.status(401).send({message: 'Nenhuma empresa encontrada'})
        } catch(error) {
            console.error(error)
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

    public async createEmpresa(req: any, res: any) {
        try {
            const empresa = <Empresa> req.body
            let responseData = await EmpresaServices.createEmpresa(empresa)

            if(responseData)
                res.status(200).send(responseData)
            else
                res.status(401).send({message: 'Não foi possível cadastrar a empresa'})
        } catch(error) {
            console.error(error)
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

    public async updateEmpresa(req: any, res: any) {
        try {
            const empresa = <Empresa> req.body
            let responseData = await EmpresaServices.updateEmpresa(empresa)

            if(responseData)
                res.status(201).send(responseData)
            else
                res.status(401).send({message: 'Não foi possível alterar os dados da empresa'})
        } catch(error) {
            console.error(error)
            res.status(500).send({message: 'Erro no processo de requisição.', error})
        }
    }
}

export default new EmpresaController()