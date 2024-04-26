const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemonByName = require('../controllers/getPokemonByName');
const getPokemonById = require('../controllers/getPokemonById');
const getPokemons = require('../controllers/getPokemons');
const getTypes = require('../controllers/getTypes');
const postPokemons = require('../controllers/postPokemons');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemons);
router.get("/pokemons/name", getPokemonByName);
router.get("/types", getTypes);
router.get("/pokemons/:idPokemon", getPokemonById);
router.post("/pokemons", postPokemons);

module.exports = router;
