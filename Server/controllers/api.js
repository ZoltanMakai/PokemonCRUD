const Pokemon = require("../models/pokemons");

module.exports = class API {
  static async fetchAllPokemon(req, res) {
    try {
      const pokemons = await Pokemon.find();
      res.status(200).json(pokemons);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async fetchPokemonbyID(req, res) {
    res.send("Fetch Pokemon by ID");
  }

  static async createPokemon(req, res) {
    res.send("create Pokemon");
  }

  static async updatePokemon(req, res) {
    res.send("update Pokemon");
  }

  static async deletePokemon(req, res) {
    res.send("delete Pokemon");
  }
};
