export const setAllPokemons = (pokemons) => {
    return {
        type: "SETALLPOKEMONS",
        payload: pokemons
    };
};

export const filterPokemonsByName = (name) => {
    return {
        type: "FILTERPOKEMONSBYNAME",
        payload: name
    };
};

export const filterPokemonsByType = (type) => {
    return {
        type: "FILTERPOKEMONSBYTYPE",
        payload: type
    };
};

export const filterPokemonsByOrigin = (origin) => {
    return {
        type: "FILTERPOKEMONSBYORIGIN",
        payload: origin
    };
};

export const orderPokemons = (order) => {
    return {
        type: "ORDERPOKEMONS",
        payload: order
    };
};

export const setPage = (page) => {
    return {
        type: "SETPAGE",
        payload: page
    }
};