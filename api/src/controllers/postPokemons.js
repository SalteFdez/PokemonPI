const { Pokemon, Type, PokemonTypes } = require ("../db.js");

const postPokemons = async (req, res) => {

    try {
        const { name, image, health, attack, defense, speed, height, weight } = req.body;
        
        if (req.body.type2) {
            var types = [req.body.type1, req.body.type2];
        } else {
            var types = [req.body.type1];
        }
        if (name && image && health && attack && defense && speed && height && weight && types) {
            const newPokemon = await Pokemon.create({
                name, image, health, attack, defense, speed, height, weight
            });

            for (const typeName of types) {
                const type = await Type.findOrCreate({ where: { name: typeName }});
                
                if (type) {
                    await PokemonTypes.create({
                        PokemonId: newPokemon.id,
                        TypeId: type[0].id
                    });
                } else {
                    return res.status(401).send(`El tipo ${typeName} no existe en la base de datos.`);
                }
            }

            const associatedTypes = await newPokemon.getTypes();
            const pokemonData = {
                id: newPokemon.id,
                name: newPokemon.name,
                image: newPokemon.image,
                health: newPokemon.health,
                attack: newPokemon.attack,
                defense: newPokemon.defense,
                speed: newPokemon.speed,
                height: newPokemon.height,
                weight: newPokemon.weight,
                types: associatedTypes.map(type => type.name)
            };
            
            return res.status(200).json(pokemonData);
        } else {
            return res.status(400).send("Faltan datos");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postPokemons;