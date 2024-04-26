const axios = require('axios');
const { Pokemon } = require('../db');

const getPokemonByName = async (req, res) => {

    try {
        let { name } = req.query;
        name = name.toLowerCase();
        if (name) {
            const dbPokemons = await Pokemon.findAll({where: { name }});
            const apiPokemonsResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const apiPokemons = apiPokemonsResponse.data;
            const pokemons = [];
            pokemons.push(dbPokemons, apiPokemons);
            return res.status(200).json(pokemons)
        }
        return res.status(401).send('No existen pokemons con ese nombre.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getPokemonByName;