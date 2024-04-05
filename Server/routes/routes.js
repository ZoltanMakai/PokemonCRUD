const express = require("express");
const router = express.Router();
const API = require("../controllers/api").default;

router.get("/", API.fetchAllPokemon);
router.get("/:id", API.fetchPokemonbyID);
router.post("/", API.createPokemon);
router.patch("/:id", API.updatePokemon);
router.delete("/:id", API.deletePokemon);

module.exports = router;
