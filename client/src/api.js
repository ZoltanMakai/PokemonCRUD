import axios from "axios";

const url = "http://localhost:5000/";

export default class API {
  static async getAllPokemons() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getPokemonById(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async addPokemon(pokemon) {
    const res = await axios.post(url, pokemon);
    return res.data;
  }
  static async updatePokemonById(id, pokemon) {
    const res = await axios.patch(`${url}/${id}`, pokemon);
    return res.data;
  }
  static async deletePokemon(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
