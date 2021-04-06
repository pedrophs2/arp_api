function buildParamsSlot(ammount) {
    let params = ''

    while(ammount > 1) {
        params += '?, '
        ammount--
    }

    params += '?'

    return params
}

function buildParams(obj) {
    let columns = ''

    obj.forEach(column => {
        columns += (column + ', ')
    })

    return columns.substring(0, columns.length-2)
}

exports.buildParamsSlot = buildParamsSlot
exports.buildParams = buildParams