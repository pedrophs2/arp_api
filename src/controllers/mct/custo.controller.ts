import { Custos } from './../../models/mct/custos.model'
import CustoServices from '../../services/mct/custo.services'

class CustoController {

    public async getCusto(req: any, res: any) {
        try {
            let response = await CustoServices.getCusto(req.params.usuario_id)

            if(response)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Não foram encontrados custos cadastrados para esse usuário'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

    public async setCusto(req: any, res: any) {
        let custos: Custos = <Custos> req.body
        custos.custos_id_usuario = req.params.usuario_id
        console.log(custos)

        try {
            let response = await CustoServices.saveCusto(custos)

            if(response)
                res.status(200).send({message: 'Custos cadastrados com sucesso'})
            else
                res.status(204).send({message: 'Erro ao cadastrar custos'})
                
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

}

export default new CustoController()