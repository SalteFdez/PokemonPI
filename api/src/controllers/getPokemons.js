const { Pokemon, Type, PokemonTypes } = require("../db");
const axios = require("axios");

const getPokemons = async (req, res) => {
    try {
        const dbPokemons = await Pokemon.findAll({
            include: Type
        });
        let allApiPokemons = [];

        const fetchPokemonsFromApi = async (url) => {
            const response = await axios.get(url);
            const apiPokemons = response.data.results;
            const apiPokemonsData = await Promise.all(apiPokemons.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                const pokemonData = pokemonResponse.data;
                const { name, stats, height, weight, id, sprites: { front_default }, types } = pokemonData;
                return { name, stats, height, weight, id, front_default, types };
            }));
            allApiPokemons = [...allApiPokemons, ...apiPokemonsData];
            const nextUrl = response.data.next;

            if (nextUrl) {
                await fetchPokemonsFromApi(nextUrl);
            }
        };

        await fetchPokemonsFromApi("https://pokeapi.co/api/v2/pokemon");

        const pokemons = [...dbPokemons, ...allApiPokemons];

        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getPokemons;
