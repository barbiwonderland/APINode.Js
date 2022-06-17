const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  genre: String,
});

//Modelo para exportat
module.exports = mongoose.model("Cat", catSchema);;
