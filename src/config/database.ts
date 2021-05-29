import { Global } from '../global/global'
import mysql from 'mysql2'

class mysqldb {
    // async connect() {
    //     if(Global.connection && Global.connection.state !== 'disconnected')
    //         Global.connection.end()

    //     const mysql = require('mysql2/promise')
    //     const conn = await  mysql.createConnection('mysql://arp-master:arpmaster2021@mysql742.umbler.com:41890/arp-api-msql')

    //     Global.connection = conn
    //     return conn
    // }

    connection: mysql.Pool;

    async connect() {
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

        this.connection = pool

        return this.connection
    }

    async disconnect() {
        this.connection.getConnection((err, conn) => {
            if(conn)
                conn.release()
        })
    }

    async getConnection() {
        return Global.connection
    }
}

export default new mysqldb()
