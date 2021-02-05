const {mongo} = require('../../config/database')
const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const OrderSchema = new Schema ({
    userId: {type: String, required: true},
    orderValue: {type: Number, required: true},
    orderDate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('BC_Order', OrderSchema)