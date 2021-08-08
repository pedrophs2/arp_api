import { Global } from '../global/global'
import mysql from 'mysql2'
import { Connection } from './interfaces/connection.interface'

class mysqldb implements Connection {

    public async getConnection() {
        if(Global.connection)
            return Global.connection
        
        Global.connection = this.connect()
        return Global.connection
    }

    public async connect() {
        try {
            const pool = await mysql.createPool({
                host: 'mysql742.umbler.com',
                user: 'arp-master',
                password: 'arpmaster2021',
                port: 41890,
                database: 'arp-api-msql',
                waitForConnections: true,
                connectionLimit: 25,
                queueLimit: 0
            })
    
            return pool.promise()
        } catch(error) {
            console.log(`Could not connect: ${error}`)
        }
    }

}

export default new mysqldb()
