const fs = require('fs')
const pdf = require('html-pdf')
const path = require('path')

const OrcamentoServices = require('../OrcamentoServices')

var orcamento = path.join(__dirname, '../../../assets/html/orcamento-resumido.html')
var filename = orcamento.replace('.html', '.pdf')
var orcamentoHtml = fs.readFileSync(orcamento, 'utf-8')

const options = {
    type: 'pdf',
    format: 'A4',
    orientation: 'portrait'
}

class OrcamentoPDFServices {

    async generatePDFOrcamento(req, res) {
        try{
            let orcamento = await OrcamentoServices.getOrcamentoById(req.params.id)
            orcamentoHtml = orcamentoHtml.toString()

            // Cliente
            orcamentoHtml = orcamentoHtml.replace('{{cliente_nome}}', 'Pedro Henrique')
            orcamentoHtml = orcamentoHtml.replace('{{cliente_nome}}', 'Pedro Henrique')
            orcamentoHtml = orcamentoHtml.replace('{{cliente_endereco}}', 'Rua João de Barro')
            orcamentoHtml = orcamentoHtml.replace('{{cliente_tel}}', '(77) 99862-7414')

            // Orcamento
            orcamentoHtml = orcamentoHtml.replace('{{orcamento_id}}', orcamento.orcamento_id)
            orcamentoHtml = orcamentoHtml.replace('{{orcamento_data}}', orcamento.orcamento_data)
            orcamentoHtml = orcamentoHtml.replace('{{orcamento_nome}}', orcamento.orcamento_nome)
            orcamentoHtml = orcamentoHtml.replace('{{orcamento_total}}', orcamento.orcamento_total)
            orcamentoHtml = orcamentoHtml.replace('{{orcamento_total}}', orcamento.orcamento_total)
            orcamentoHtml = orcamentoHtml.replace('{{orcamento_valor_final}}', orcamento.orcamento_valor_final)

            pdf.create(orcamentoHtml, options).toBuffer((err, buffer) => {
                if(err) return res.status(500).json(err)

                res.end(buffer)
            })
        } catch(error) {
            console.log(error)
        }
    }

}

module.exports = new OrcamentoPDFServices()