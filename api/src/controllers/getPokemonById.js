const axios = require("axios");

const getPokemonById = async (req, res) => {

    try {
        const pokeID = req.params.idPokemon;
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
        const pokemon = data;
        return pokemon.name
                ? res.json(pokemon)
                : res.status(404).send("No ha sido encontrado un pokemon con ese ID.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getPokemonById;