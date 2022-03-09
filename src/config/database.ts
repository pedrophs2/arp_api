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
                host: 'sql716.main-hosting.eu',
                user: 'u490967214_arpmaster',
                password: 'Ffba79bfb45',
                port: 3306,
                database: 'u490967214_arpapi',
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
