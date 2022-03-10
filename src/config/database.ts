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
                host: process.env.SQL_HOST,
                user: process.env.SQL_USER,
                password: process.env.SQL_PASSWORD,
                port: Number(process.env.SQL_PORT),
                database: process.env.SQL_SCHEMA,
                waitForConnections: true,
                connectionLimit: Number(process.env.SQL_LIMIT),
                queueLimit: 0
            })
    
            return pool.promise()
        } catch(error) {
            console.log(`Could not connect: ${error}`)
        }
    }

}

export default new mysqldb()
