const OrcamentoPDFServices = require('../../../services/mct/PDF/OrcamentoPDFServices')

class OrcamentoPDFController {

    async generatePDFOrcamento(req, res) {
        let response = await OrcamentoPDFServices.generatePDFOrcamento()
        console.log(response)

        if(response != null)
            res.status(200).send(response)
        else
            res.status(400).send({error: 'Não foi possível gerar o PDF'})
    }

}

module.exports = new OrcamentoPDFController()