const bcrypt = require('bcrypt')

class PassCrypt {

    public encrypt(data: string): any {
        let encryptedPassword = bcrypt.hashSync(data, process.env.SALT)
        return encryptedPassword
    }

}

export default new PassCrypt()