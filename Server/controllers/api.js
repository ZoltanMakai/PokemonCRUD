const Pokemon = require("../models/pokemons");
const fs = require("fs");
const slugify = require("slugify");

const API = {
  fetchAllPokemon: async (req, res) => {
    try {
      const pokemons = await Pokemon.find();
      res.status(200).json(pokemons);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  fetchPokemonBySlug: async (req, res) => {
    const slug = req.params.slug;
    try {
      const pokemon = await Pokemon.findOne({ slug });
      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon not found" });
      }
      res.status(200).json(pokemon);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  createPokemon: async (req, res) => {
    const pokemon = req.body;
    const imagename = req.file.filename;
    pokemon.image = imagename;
    try {
      await Pokemon.create(pokemon);
      res.status(201).json({ message: "Pokemon created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updatePokemonBySlug: async (req, res) => {
    const slug = req.params.slug;
    let new_image = "";

    try {
      const existingPokemon = await Pokemon.findOne({ slug });

      if (!existingPokemon) {
        return res.status(404).json({ message: "Pokemon not found" });
      }

      if (req.file) {
        new_image = req.file.filename;

        try {
          if (existingPokemon.image) {
            fs.unlinkSync("./uploads/" + existingPokemon.image);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        new_image = existingPokemon.image;
      }

      existingPokemon.name = req.body.name;
      existingPokemon.type = req.body.type;
      existingPokemon.hp = req.body.hp;
      existingPokemon.attack = req.body.attack;
      existingPokemon.defense = req.body.defense;
      existingPokemon.speed = req.body.speed;
      existingPokemon.image = new_image;
      existingPokemon.slug = slugify(req.body.name, { lower: true });

      await existingPokemon.save();
      res.status(200).json({ message: "Pokemon updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deletePokemonBySlug: async (req, res) => {
    const slug = req.params.slug;
    try {
      const result = await Pokemon.findOneAndDelete({ slug });
      if (!result) {
        return res.status(404).json({ message: "Pokemon not found" });
      }
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (error) {
          console.log(error);
        }
      }
      res.status(200).json({ message: "Pokemon deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = API;
