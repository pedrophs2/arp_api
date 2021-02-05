const mongoose = require('mongoose')

const url = 'mongodb://arpmaster:devmaster@geonosis.mongodb.umbler.com:54426/arp-api'
mongoose.connect(url, {useNewUrlParser: true})

module.exports = mongoose