import { Dashboard } from '../../models/mct/dashboard.model';
import DashboardServices from '../../services/mct/dashboard.services'

class DashboardController {

    private _service = DashboardServices

    public async getDashboard(req: any, res: any) {
        try {
            let cd_usuario = req.params.cd_usuario

            let dashboard = await DashboardServices.mountDashboard(cd_usuario)
            
            if(dashboard)
                res.status(200).send(dashboard)
            else
                res.status(204).send({message: 'Não foram encontrados dados para a montagem do dashboard'})
        } catch(error) {
            res.status(500).send({message: 'Erro no processo de requisição', error})
        }
    }

}

export default new DashboardController()