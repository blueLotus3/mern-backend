const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/:27017', { useUnifiedTopology: true, useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
