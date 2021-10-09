import { Venda } from "../../models/mct/venda.model";
import VendaServices from '../../services/mct/venda.services'

class VendaController {

    async vendaCredito(req: any, res: any) {
        try { 
            let response = await VendaServices.vendaCredito(req.body)

            if(response != null) 
                res.status(response.statusCode).send(response)

        } catch(error) {
            res.status(500).send({message: 'Erro no processamento da requisição'})
        }
    }

}

export default new VendaController()