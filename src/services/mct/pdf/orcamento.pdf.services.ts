import { Orcamento } from './../../../models/mct/orcamento.model';
import fs from 'fs'
import pdf from 'html-pdf'
import path from 'path'
import moment from 'moment'

var orcamento = path.join(__dirname, '../../../assets/html/orcamento-resumido.html')
var filename = orcamento.replace('.html', '.pdf').replace('\\html\\', '\\pdf\\')
var orcamentoHtml = fs.readFileSync(orcamento, 'utf-8')

const options: pdf.CreateOptions = {
    type: 'pdf',
    format: 'A4',
    orientation: 'portrait'
}

class OrcamentoPDFServices {

    async generatePDFOrcamento(req: any, res: any) {
        try {
            let orcamento = req.body
            let tmpString: string = orcamentoHtml.toString()

            // Cliente
            tmpString = tmpString.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome)
            tmpString = tmpString.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome)
            tmpString = tmpString.replace('{{cliente_endereco}}', orcamento.orcamento_cliente.cliente_endereco)
            tmpString = tmpString.replace('{{cliente_fone}}', orcamento.orcamento_cliente.cliente_fone)

            // Orcamento
            tmpString = tmpString.replace('{{orcamento_id}}', orcamento.orcamento_id || 'Não salvo')
            tmpString = tmpString.replace('{{orcamento_data}}', moment(orcamento.orcamento_data).format('DD/MM/YYYY'))
            tmpString = tmpString.replace('{{orcamento_nome}}', orcamento.orcamento_nome)
            tmpString = tmpString.replace('{{orcamento_total}}', orcamento.orcamento_total)
            tmpString = tmpString.replace('{{orcamento_total}}', orcamento.orcamento_total)
            tmpString = tmpString.replace('{{orcamento_valor_final}}', orcamento.orcamento_valor_final)

            console.log(orcamentoHtml)

            pdf.create(tmpString, options).toBuffer((err: Error, buffer: Buffer) => {
                if (err) return res.status(500).json(err)

                res.end(buffer)
            })
        } catch (error) {
            console.log(error)
        }
    }

}

export default new OrcamentoPDFServices()