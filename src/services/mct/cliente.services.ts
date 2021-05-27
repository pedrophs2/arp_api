import db from '../../config/database'
import { Cliente } from '../../models/mct/cliente.model'

class ClienteServices {

    async listClientesByUsuario(usuario_id: number) {
        try {
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM MCT_CLIENTE WHERE cliente_id_usuario = ?', [usuario_id])

            if(data[0] != undefined)
                return data
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        } finally {
            db.disconnect()
        }
    }

    async listClientesByUsuarioCliente(usuario_id: number, cliente_id: number) {
        try {
            const conn = await db.connect()
            let [data]: any = await conn.promise().query('SELECT * FROM MCT_CLIENTE WHERE cliente_id_usuario = ? AND cliente_id = ?', [usuario_id, cliente_id])

            if(data[0] != undefined)
                return data[0]
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        } finally {
            db.disconnect()
        }
    }

    async createCliente(cliente: Cliente) {
        try {
            const conn = await db.connect()
            const query = 'INSERT INTO MCT_CLIENTE (cliente_id_usuario, cliente_nome, cliente_fone, cliente_endereco) VALUES ( ?, ?, ?, ?)'
            const values = [cliente.cliente_id_usuario, cliente.cliente_nome, cliente.cliente_fone, cliente.cliente_endereco]

            let data = await conn.promise().query(query, values)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }

    async updateCliente(cliente: Cliente) {
        try {
            const conn = await db.connect()
            const query = 'UPDATE MCT_CLIENTE SET cliente_nome = ?, cliente_fone = ?, cliente_endereco = ? WHERE cliente_id = ?'
            const values = [cliente.cliente_nome, cliente.cliente_fone, cliente.cliente_endereco, cliente.cliente_id]

            let data = await conn.promise().query(query, values)

            console.log(data)

            if(data != null)
                return true
            else
                return false
        } catch(error) {
            console.log(error)
            return false
        } finally {
            db.disconnect()
        }
    }
}

export default new ClienteServices()
