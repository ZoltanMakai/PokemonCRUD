const Pokemon = require("../models/pokemons");
const fs = require("fs");

const API = {
  fetchAllPokemon: async (req, res) => {
    try {
      const pokemons = await Pokemon.find();
      res.status(200).json(pokemons);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  fetchPokemonbyID: async (req, res) => {
    const id = req.params.id;
    try {
      const pokemon = await Pokemon.findById(id);
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

  updatePokemon: async (req, res) => {
    const id = req.params.id;
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (error) {
        console.log(error);
      }
    } else {
      new_image = req.body.old_image;
    }
    const newPokemon = req.body;
    newPokemon.image = new_image;
    try {
      await Pokemon.findByIdAndUpdate(id, newPokemon);
      res.status(200).json({ message: "Pokemon updated successfully" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deletePokemon: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Pokemon.findByIdAndDelete(id);
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
