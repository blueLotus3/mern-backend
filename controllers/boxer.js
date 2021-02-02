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
    .catch((err) => res.json({ status: 400, err: err }));
})

router.get("/:name", (req, res) => {
    Boxer.find({ firstName: req.params.name }).then((boxers) => {
      res.json(boxers);
    });
  });



router.post("/", async (req, res) => {
    res.json(await Boxer.create(req.body));
  });

  router.put("/:name", (req, res) => {
    Boxer.findOneAndUpdate({ firstName: req.params.name }, req.body).then(
      (boxer) => {
        res.json(boxer);
      }
    );
  });


  router.delete("/:id", async (req, res) => {
    res.json(await Boxer.findByIdAndRemove(req.params.id));
  });

  router.get("/:id/gloves", (req, res) => {
      Boxer.find({_id: req.params.id})
      .populate("gloves")
      .then((boxers) => {
          res.json(boxers)
      })
  })


module.exports = router