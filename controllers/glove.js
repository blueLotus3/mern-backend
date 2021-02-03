const express = require('express')
const router = express.Router()
const Glove = require("../models/Glove") 
const mongoose = require("../db/connection")
const db = mongoose.connection

router.get('/', async(req,res) => {
    const allGloves = await Glove.find({})
    res.json({
        status: 200,
        data: allGloves
    })
})

router.get("/:brand", (req, res) => {
    Glove.find({ brand: req.params.brand }).then((gloves) => {
      res.json(gloves);
    });
  });

  router.get("/size/:size", (req, res) => {
    Glove.find({ size: req.params.size }).then((gloves) => {
      res.json(gloves);
    });
  });

router.post("/", async (req, res) => {
    res.json(await Glove.create(req.body));
  });

  router.put("/:id", (req, res) => {
    Glove.findByIdAndUpdate(req.params.id, req.body).then((glove) => {
      res.json(glove);
    });
  });

  router.delete("/:brand", (req, res) => {
    Glove.deleteOne({ brand: req.params.brand }).then((glove) => {
      res.json(glove);
    });
  });


module.exports = router