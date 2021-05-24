import { Global } from '../global/global'

class mysqldb {
    async connect() {
        if(Global.connection && Global.connection.state !== 'disconnected')
            Global.connection.end()

        const mysql = require('mysql2/promise')
        const conn = await  mysql.createConnection('mysql://arp-master:arpmaster2021@mysql742.umbler.com:41890/arp-api-msql')

        Global.connection = conn
        return conn
    }

    async disconnect() {
        if(Global.connection != undefined && Global.connection.state !== 'disconnected')
            Global.connection.end()

        Global.connection == null
    }

    async getConnection() {
        return Global.connection
    }
}

export default new mysqldb()
