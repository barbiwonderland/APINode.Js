const express = require("express");
const catSchema = require("../models/Cat");

const router = express.Router();

// create cat
router.post("/cats", (req, res) => {
  const cat = catSchema(req.body);
  console.log(cat)
  cat
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all cats
router.get("/cats", (req, res) => {
  catSchema.find({})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a cat
router.get("/cats/:id", (req, res) => {
  const { id } = req.params;
  catSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a cat
router.delete("/cats/:id", (req, res) => {
  const { id } = req.params;
  catSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/cats/:id", (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.body;
  catSchema
    .updateOne({ _id: id }, { $set: { name, genre } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
