class QueryBuilder {

    buildParamsSlot(ammount: number) {
        let params = ''

        while(ammount > 1) {
            params += '?, '
            ammount--
        }

        params += '?'

        return params
    }

    buildParams(obj: any) {
        let columns = ''

        obj.forEach((column: string) => {
            columns += (column + ', ')
        })

        return columns.substring(0, columns.length-2)
    }

}

export default new QueryBuilder()
