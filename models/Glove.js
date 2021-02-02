const mongoose = require('../db/connection')

const GloveSchema = new mongoose.Schema({
    brand: String,
    size: Number,
    img: String,
})

const Glove = mongoose.model('Gloves', GloveSchema)
module.exports = Glove