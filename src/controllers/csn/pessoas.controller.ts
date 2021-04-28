import { Pessoa } from '../../models/csn/pessoa.model'
import PessoasServices from '../../services/csn/pessoas.services'

class PessoasController {

    async listPessoasSemEscolha(req: any, res: any) {
        try{
            let response = await PessoasServices.listPessoasSemEscolha()

            if(response != null)
                res.status(200).send(response)
            else
                res.status(401).send({message: 'Não foram encontradas pessoas sem escolhas de presentes'})
        } catch(error) {
            console.log(error)
            res.status(500).send({message: 'Erro no processo de requisição' + error})
        }
    }

    async createPessoa(req: any, res: any) {
        let pessoa: Pessoa = req.body
        console.log(pessoa)

        try{ 
            let response = await PessoasServices.createPessoa(pessoa)

            if(response)
                res.status(201).send({message: 'Cadastro criado com sucesso'})
            else
                res.status(400).send({message: 'Não foi possível concluir o cadastro'})
        } catch(error) {
            console.log(error)
            res.status(500).send({message: 'Erro no processo de requisição' + error})
        }
    }

}

export default new PessoasController()