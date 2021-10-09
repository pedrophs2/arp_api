import CloudinaryProvider from './cloudinary/services'

class ImageProvider {

    public async upload(title: string, image: string, path?: string) {
        try {
            let url = await CloudinaryProvider.uploadImage(title, image, path)
            return url
        } catch(error) {
            console.log('Erro !!')
            console.error(error)
        }
    }

}

export default new ImageProvider()