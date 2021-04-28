class ErrorHandler {

    public handleErrorData(error: any): Object {
        console.log(error)
        return null
    }

    public handleErrorBool(error: any): boolean {
        console.log(error)
        return false
    }

}

export default new ErrorHandler()