const mongoose = require("mongoose");
const slugify = require("slugify");

const pokemonSchema = mongoose.Schema({
  name: String,
  type: String,
  hp: Number,
  attack: Number,
  defense: Number,
  speed: Number,
  image: String,
  slug: {
    type: String,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

pokemonSchema.pre("save", function (next) {
  if (this.isModified("name") || this.isNew) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
