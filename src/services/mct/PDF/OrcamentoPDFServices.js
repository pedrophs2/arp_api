const fs = require('fs')
const pdf = require('html-pdf')
const path = require('path')

const OrcamentoServices = require('../OrcamentoServices')

const orcamentoHtml = fs.readFileSync(path.join(__dirname, '../../../assets/html/orcamento-resumido.html'), 'utf-8')
const options = {
    type: 'pdf',
    format: 'A4',
    orientation: 'portrait'
}

class OrcamentoPDFServices {

    async generatePDFOrcamento(req, res) {
        let orcamento = await OrcamentoServices.getOrcamentoById(req.params.id)

        pdf.create(orcamentoHtml, options).toBuffer((err, buffer) => {
            if(err) return res.status(500).json(err)

            res.end(buffer)
        })
    }

}

module.exports = new OrcamentoPDFServices()