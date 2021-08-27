import { Usuario } from './../../../models/mct/usuario.model';
import { Empresa } from './../../../models/mct/empresa.model';
import { Orcamento } from './../../../models/mct/orcamento.model';
import fs from 'fs'
import pdf from 'html-pdf'
import path from 'path'
import moment from 'moment'
import EmpresaServices from '../../../services/mct/empresa.services'
import usuarioServices from '../usuario.services';

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

            //Empresa
            const empresa: Empresa = await EmpresaServices.getEmpresaUsuario(orcamento.orcamento_id_usuario)
            tmpString = tmpString.replace('{{ds_endereco}}', empresa.ds_endereco)
            tmpString = tmpString.replace('{{ds_bairro}}', empresa.ds_bairro)
            tmpString = tmpString.replace('{{nm_cidade}}', empresa.nm_cidade)
            tmpString = tmpString.replace('{{sg_uf}}', empresa.sg_uf)
            tmpString = tmpString.replace('{{nr_cep}}', empresa.ds_cep)
            tmpString = tmpString.replace('{{nr_telefone}}', empresa.nr_telefone)
            tmpString = tmpString.replace('{{nm_empresa}}', empresa.nm_empresa)
            tmpString = tmpString.replace('{{nr_cnpj}}', empresa.nr_cnpj)

            //Usuário
            const usuario: Usuario = await usuarioServices.getUser(orcamento.orcamento_id_usuario)
            tmpString = tmpString.replace('{{usuario_logo}}', usuario.usuario_logo || 'https://res.cloudinary.com/arpdevs-tecnologia/image/upload/v1630059391/mct/props/WhatsApp_Image_2021-04-15_at_4.08.29_PM_cbwpgw.jpg')

            // Cliente
            if(orcamento.orcamento_cliente) {
                tmpString = tmpString.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome )
                tmpString = tmpString.replace('{{cliente_nome}}', orcamento.orcamento_cliente.cliente_nome )
                tmpString = tmpString.replace('{{cliente_endereco}}', orcamento.orcamento_cliente.cliente_endereco )
                tmpString = tmpString.replace('{{cliente_fone}}', orcamento.orcamento_cliente.cliente_fone )
            } else {
                tmpString = tmpString.replace('{{cliente_nome}}', 'Não cadastrado')
                tmpString = tmpString.replace('{{cliente_nome}}', 'Não cadastrado')
                tmpString = tmpString.replace('{{cliente_endereco}}', 'Não informado')
                tmpString = tmpString.replace('{{cliente_fone}}', 'Não informado')
            }

            // Orcamento
            tmpString = tmpString.replace('{{orcamento_id}}', orcamento.orcamento_id || 'Não salvo')
            tmpString = tmpString.replace('{{orcamento_data}}', moment(orcamento.orcamento_data).format('DD/MM/YYYY'))
            tmpString = tmpString.replace('{{orcamento_nome}}', orcamento.orcamento_nome)
            tmpString = tmpString.replace('{{orcamento_total}}', orcamento.orcamento_total)
            tmpString = tmpString.replace('{{orcamento_total}}', orcamento.orcamento_total)
            tmpString = tmpString.replace('{{orcamento_valor_final}}', orcamento.orcamento_valor_final)

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