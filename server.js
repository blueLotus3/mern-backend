const cors = require("cors")
const corsOptions = require("./configs/cors.js")
const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('tiny'));
app.use(cors(corsOptions))


const gloveRouter = require('./controllers/glove')
app.use('/gloves/', gloveRouter)

const boxerRouter = require('./controllers/boxer')
app.use('/boxers/', boxerRouter)


app.listen(3000, () => console.log('Server running on port 3000'))