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
        let orcamento = req.body

        orcamentoHtml = orcamentoHtml.toString()

        // Cliente
        orcamentoHtml = orcamentoHtml.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome)
        orcamentoHtml = orcamentoHtml.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome)
        orcamentoHtml = orcamentoHtml.replace('{{cliente_endereco}}', orcamento.orcamento_cliente.cliente_endereco)
        orcamentoHtml = orcamentoHtml.replace('{{cliente_fone}}', orcamento.orcamento_cliente.cliente_fone)

        // Orcamento
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_id}}', orcamento.orcamento_id || 'Não salvo')
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_data}}', moment(orcamento.orcamento_data).format('DD/MM/YYYY'))
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_nome}}', orcamento.orcamento_nome)
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_total}}', orcamento.orcamento_total)
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_total}}', orcamento.orcamento_total)
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_valor_final}}', orcamento.orcamento_valor_final)

        pdf.create(orcamentoHtml, options).toBuffer((err: Error, buffer: Buffer) => {
            if(err) return res.status(500).json(err)

            res.end(buffer)
        })
    }

    async generatePDFOrcamentoSimplificadoFile(req: any, res: any) {
        let orcamento = req.body

        orcamentoHtml = orcamentoHtml.toString()

        // Cliente
        orcamentoHtml = orcamentoHtml.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome)
        orcamentoHtml = orcamentoHtml.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome)
        orcamentoHtml = orcamentoHtml.replace('{{cliente_endereco}}', orcamento.orcamento_cliente.cliente_endereco)
        orcamentoHtml = orcamentoHtml.replace('{{cliente_fone}}', orcamento.orcamento_cliente.cliente_fone)

        // Orcamento
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_id}}', orcamento.orcamento_id || 'Não salvo')
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_data}}', moment(orcamento.orcamento_data).format('DD/MM/YYYY'))
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_nome}}', orcamento.orcamento_nome)
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_total}}', orcamento.orcamento_total)
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_total}}', orcamento.orcamento_total)
        orcamentoHtml = orcamentoHtml.replace('{{orcamento_valor_final}}', orcamento.orcamento_valor_final)

        pdf.create(orcamentoHtml, options).toFile(`${filename.replace('orcamento-resumido', `${orcamento.orcamento_cliente.cliente_nome}`)}`,(err: Error, pdf: pdf.FileInfo) => {
            if(err) return res.status(500).json(err)

            fs.existsSync(pdf.filename)
            res.end(pdf.filename)
        })
    }

}

export default new OrcamentoPDFServices()