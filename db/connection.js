const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/127017', { useUnifiedTopology: true, useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
