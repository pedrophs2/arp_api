import crypto from 'crypto'

export class DataCrypt {

    public encrypt(data: string) {
        const algorithm = process.env.CRYPT_ALG
        const key = Buffer.from(process.env.CRYPT_KEY, 'hex')
        const iv = Buffer.from(process.env.CRYPT_IV, 'hex')

        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
        let encrypted = cipher.update(JSON.stringify(data))
        encrypted = Buffer.concat([encrypted, cipher.final()])
        return encrypted.toString('hex')
    }

    public decrypt(data: string) {
        const algorithm = process.env.CRYPT_ALG
        const key = Buffer.from(process.env.CRYPT_KEY, 'hex')
        const iv = Buffer.from(process.env.CRYPT_IV, 'hex')
        
        let encryptedText = Buffer.from(data, 'hex');
        let decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString()
    }

}