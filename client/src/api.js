import axios from "axios";

const url = "http://localhost:5000/";

const API = {
  getAllPokemons: async () => {
    const res = await axios.get(url);
    return res.data;
  },
  getPokemonBySlug: async (slug) => {
    const res = await axios.get(`${url}${slug}`);
    return res.data;
  },
  addPokemon: async (pokemon) => {
    const res = await axios.post(url, pokemon);
    return res.data;
  },
  updatePokemonBySlug: async (slug, pokemon) => {
    const res = await axios.patch(`${url}${slug}`, pokemon);
    return res.data;
  },
  deletePokemon: async (slug) => {
    const res = await axios.delete(`${url}${slug}`);
    return res.data;
  },
};

export default API;
