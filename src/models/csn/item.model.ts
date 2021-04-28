export class Item {
    item_id: number
    item_desc: string
    item_pessoa_id: number

    constructor(item_id?: number, item_desc?: string, item_pessoa_id?: number) {
        this.item_id = item_id
        this.item_desc = item_desc
        this.item_pessoa_id = item_pessoa_id
    }
}