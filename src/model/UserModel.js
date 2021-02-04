const { mongo } = require('../config/database')
const mongoose = require('../config/database')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {type: String, required: true},
    pass: {type: String, required: true},
    created: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', UserSchema)
