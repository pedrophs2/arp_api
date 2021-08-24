import cloudinary from 'cloudinary'
import { credentials } from './config'
import { ImageProvider } from '../image_provider.interface'

const service = cloudinary

class CloudinaryProvider implements ImageProvider {

    async uploadImage(title: string, image: string, path?: string): Promise<string> {
        try {
            service.v2.config(credentials)
            let data = await service.v2.uploader.upload(image, { folder: path, public_id: title, overwrite: true })
            return data.url
        } catch(error) {
            console.log(error)
            return null
        }
    }

    getImage(url: string) {
        throw new Error('Method not implemented.')
    }

    private auth() {
        service.v2.config(credentials)
    }

}

export default new CloudinaryProvider()


