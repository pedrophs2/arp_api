async function connect() {
    if(global.connection != undefined && global.connection.state !== 'disconnected')
        global.connection.end()

    const mysql = require('mysql2/promise')
    const conn = await  mysql.createConnection('mysql://arp-master:arpmaster2021@mysql742.umbler.com:41890/arp-api-msql')

    global.connection = conn
    return conn
}

exports.connect = connect