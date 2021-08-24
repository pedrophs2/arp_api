export interface ImageProvider {

    uploadImage(title: string, image: string, path?: string): any
    getImage(url: string): any

}

