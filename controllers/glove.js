const express = require('express')
const router = express.Router()
const Glove = require("../models/Glove") 


router.get('/', async(req,res) => {
    const allGloves = await Glove.find({})
    res.json({
        status: 200,
        data: allGloves
    })
})


module.exports = router