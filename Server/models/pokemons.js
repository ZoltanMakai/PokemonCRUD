const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: String,
  type: String,
  hp: Number,
  attack: Number,
  defence: Number,
  speed: Number,
  image: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
