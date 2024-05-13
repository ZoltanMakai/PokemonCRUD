import axios from "axios";

const url = "http://localhost:5000/";

const API = {
  getAllPokemons: async () => {
    const res = await axios.get(url);
    return res.data;
  },
  getPokemonById: async (id) => {
    const res = await axios.get(`${url}${id}`);
    return res.data;
  },
  addPokemon: async (pokemon) => {
    const res = await axios.post(url, pokemon);
    return res.data;
  },
  updatePokemonById: async (id, pokemon) => {
    const res = await axios.patch(`${url}/${id}`, pokemon);
    return res.data;
  },
  deletePokemon: async (id) => {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  },
};

export default API;
