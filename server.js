require("dotenv").config()
const cors = require("cors")
const corsOptions = require("./configs/cors.js")
const express = require('express')
const logger = require('morgan')
const app = express()

const {PORT = 3000, NODE_ENV = "development"} = process.env

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('tiny'));
app.use(cors(corsOptions))


const gloveRouter = require('./controllers/glove')
app.use('/gloves/', gloveRouter)

const boxerRouter = require('./controllers/boxer')
app.use('/boxers/', boxerRouter)


app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
  });