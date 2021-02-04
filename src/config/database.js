const mongoose = require('mongoose')

const url = 'mongodb://busck:433uqmongo@geonosis.mongodb.umbler.com:45809/businesscook-mon'
mongoose.connect(url, {useNewUrlParser: true})

module.exports = mongoose