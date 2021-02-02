const express = require('express')
const router = express.Router()
const Boxer = require("../models/Boxer")
const Glove = require("../models/Glove") 


router.get('/', async(req, res) => {
    const allBoxers = await Boxer.find({})
    res.json({
        status: 200,
        data: allBoxers
    })
})


module.exports = router