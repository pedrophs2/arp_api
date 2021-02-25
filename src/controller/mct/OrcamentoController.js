const db = require('../../config/database')

class OrcamentoController {

    async listOrcamentos(req, res) {
        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_ORCAMENTO')
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Nenhum usuário cadastrado', response: []})
            
        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async getOrcamentoById(req, res) {
        let id = req.params.id

        try{
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [id])
            
            if(data[0] != undefined)
                res.status(200).send(data)
            else
                res.status(204).send({message: 'Nenhum usuário encontrado', error: []})

        } catch (error) {
            res.status(500).send({message: 'Erro no processo de requisição', error: error})
        }
    }

    async createOrcamento(req, res) {
        let orcamento = req.body

        try {
            const conn = await db.connect()
            const query = 'INSERT INTO MCT_ORCAMENTO (orcamento_total, campos_json) VALUES (?, ?)'
            const values = [orcamento.orcamento_total, orcamento.campos_json]

            let data = await conn.query(query, values)

            if(data != null)
                res.status(201).send('Orçamento criado com sucesso')
            else
                res.status(400).send({message: 'Erro na inserção do orçamento'})
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição: ', error: error})
        }
    }

    async updateOrcamento(req, res) {
        let orcamento = req.body

        try{
            const conn = await db.connect()
            const query = 'UPDATE MCT_ORCAMENTO SET orcamento_total = ?, campos_json = ? WHERE orcamento_id = ?'
            const values = [orcamento.orcamento_total, orcamento.campos_json, req.params.id]

            let data = await conn.query(query, values)

            if(data != null)
                res.status(201).send('Orçamento atualizado')
            else
                res.status(400).send('Erro na atualização do orçamento')
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição', error: error})
        }
    }

    async deleteOrcamento(req, res) {
        let id = req.params.id

        try {
            const conn = await db.connect()
            let data = await conn.query('DELETE FROM MCT_ORCAMENTO WHERE orcamento_id = ?', [id])

            if(data != undefined)
                res.status(200).send('Orçamento excluído com sucesso')
            else
                res.status(400).send('Erro na exclusão do orçamento')
        } catch(error) {
            res.status(500).send({message: 'Erro na requisição de dados', error: error})
        }
    }

}

module.exports = new OrcamentoController()