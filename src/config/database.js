async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = require('mysql2/promise')
    const conn = await  mysql.createConnection('mysql://arp-master:arpmaster2021@mysql742.umbler.com:41890/arp-api-msql')
    console.log('Connected')

    global.connection = conn
    return conn
}

exports.connect = connect