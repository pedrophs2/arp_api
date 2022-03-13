import { Custos } from './../../models/mct/custos.model'
import CustoServices from '../../services/mct/custo.services'
import { Request, Response } from 'express'

class CustoController {

    public async getCusto(req: Request, res: Response) {
        try {
            let response = await CustoServices.getCusto(Number(req.params.usuario_id))

            if(response)
                res.status(200).send(response)
            else
                res.status(204).send({message: 'Não foram encontrados custos cadastrados para esse usuário'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

    public async setCusto(req: Request, res: Response) {
        let custos: Custos = <Custos> req.body
        custos.custos_id_usuario = Number(req.params.usuario_id)
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