import ImageProvider from '../../third_party/images/image.provider'
import db from '../../config/database'
import { Cliente } from '../../models/mct/cliente.model'

const IMAGE_PATH = 'mct/clientes'
class ClienteServices {

    async listClientesByUsuario(usuario_id: number) {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_CLIENTE WHERE cliente_id_usuario = ?', [usuario_id])

            if(data[0] != undefined)
                return data
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async listClientesByUsuarioCliente(usuario_id: number, cliente_id: number) {
        try {
            const conn = await db.getConnection()
            let [data]: any = await conn.query('SELECT * FROM MCT_CLIENTE WHERE cliente_id_usuario = ? AND cliente_id = ?', [usuario_id, cliente_id])

            if(data[0] != undefined)
                return data[0]
            else
                return null
        } catch(error) {
            console.log(error)
            return null
        }
    }

    async createCliente(cliente: Cliente) {
        try {
            cliente.cliente_logo = await ImageProvider.upload(cliente.cliente_nome, cliente.cliente_logo, IMAGE_PATH)

            const conn = await db.getConnection()
            const query = 'INSERT INTO MCT_CLIENTE (cliente_id_usuario, cliente_cpf_cnpj cliente_nome, cliente_fone, cliente_endereco, cliente_logo) VALUES (?, ?, ?, ?, ?, ?)'
            const values = [cliente.cliente_id_usuario, cliente.cliente_cpf_cnpj, cliente.cliente_nome, cliente.cliente_fone, cliente.cliente_endereco, cliente.cliente_logo]

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

    async updateCliente(cliente: Cliente) {
        try {
            cliente.cliente_logo = await ImageProvider.upload(cliente.cliente_nome, cliente.cliente_logo, IMAGE_PATH)

            const conn = await db.getConnection()
            const query = 'UPDATE MCT_CLIENTE SET cliente_cpf_cnpj = ?, cliente_nome = ?, cliente_fone = ?, cliente_endereco = ?, cliente_logo = ? WHERE cliente_id = ?'
            const values = [cliente.cliente_cpf_cnpj ,cliente.cliente_nome, cliente.cliente_fone, cliente.cliente_endereco, cliente.cliente_logo, cliente.cliente_id]

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

export default new ClienteServices()
