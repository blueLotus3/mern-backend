require('dotenv').config()
const { PORT = 4000, NODE_ENV = "development" } = process.env;
const express = require('express')
const logger = require('morgan')
const app = express()

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(logger('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

////////////
//MIDDLEWARE
////////////
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());


//Route for testing server is working
app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });


// const gloveRouter = require('./controllers/glove')
// app.use('/gloves/', gloveRouter)

// const boxerRouter = require('./controllers/boxer')
// app.use('/boxers/', boxerRouter)


app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
  });