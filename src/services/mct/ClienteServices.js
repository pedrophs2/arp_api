const db = require('../../config/database')

class ClienteServices {

    async listClientesByUsuario(usuario_id) {
        try {
            const conn = await db.connect()
            let [data] = await conn.query('SELECT * FROM MCT_CLIENTE WHERE cliente_id_usuario = ?', [usuario_id])

            if(data[0] != undefined)
                return data
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async createCliente(cliente) {
        try {
            const conn = await db.connect()
            const query = 'INSERT INTO MCT_CLIENTE (cliente_id_usuario, cliente_nome, cliente_fone, cliente_endereco) VALUES ( ?, ?, ?, ?)'
            const values = [cliente.cliente_id_usuario, cliente.cliente_nome, cliente.cliente_fone, cliente.cliente_endereco]

            let data = await conn.query(query, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        }
    }

}

module.exports = new ClienteServices()