const mongoose = require('../db/connection')



const BoxerSchema = new mongoose.Schema({
    name: String,
    class: String,
    gloves: [
        {
            ref: 'Gloves',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

Boxer = mongoose.model('Boxers', BoxerSchema)
module.exports = Boxer