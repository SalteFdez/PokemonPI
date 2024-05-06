const initialState = {
    pokemons: [],
    types: [],
    allPokemons: [],
    currentPage: 1,
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return {...state};

        case "SETPAGE":
            return {
                ...state,
                currentPage: action.payload
            }

        case "SETALLPOKEMONS":
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload
            }

        case "FILTERPOKEMONSBYNAME":
            if (action.payload === "") return {
                ...state,
                pokemons: state.allPokemons
            }

            const filteredPokemons = state.allPokemons.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(action.payload.toLowerCase());
            })

            return {
                ...state,
                pokemons: filteredPokemons
            }
        
        case "FILTERPOKEMONSBYTYPE":
            if (action.payload === "All") return {
                ...state,
                pokemons: state.allPokemons
            }

            const typeFilter = state.pokemons.filter((pokemon) => {
                if (pokemon.Types) {
                    if (pokemon.Types.length === 1) {
                        return pokemon.Types[0].name === action.payload;
                    } else if (pokemon.Types.length === 2) {
                        return pokemon.Types.some(type => type.name === action.payload);
                    }
                } else {
                    if (pokemon.types.length === 1) {
                        return pokemon.types[0].type.name === action.payload;
                    } else if (pokemon.types.length === 2) {
                        return pokemon.types.some(type => type.type.name === action.payload);
                    }
                }
            });

            return {
                ...state,
                pokemons: typeFilter
            }

        case "FILTERPOKEMONSBYORIGIN":
            let filterPokemonsOrigin;
        
            if (action.payload === "All") {
                return {
                    ...state,
                    pokemons: state.allPokemons
                };
            }
        
            if (action.payload === "db") {
                filterPokemonsOrigin = state.allPokemons.filter((pokemon) => {
                    return pokemon.origin === true;
                });
            }
        
            if (action.payload === "api") {
                filterPokemonsOrigin = state.allPokemons.filter((pokemon) => {
                    return !pokemon.hasOwnProperty('origin')
                });
            }
        
            return {
                ...state,
                pokemons: filterPokemonsOrigin
            };
            
        case "ORDERPOKEMONS":
            const orderCopy = [...state.pokemons];
            
            orderCopy.sort((a, b) => {
                const nameA = a.name;
                const nameB = b.name;
                
                let atkA, atkB;
        
                if (a.stats) {
                    atkA = parseInt(a.stats[1].base_stat);
                } else {
                    atkA = parseInt(a.attack);
                }
        
                if (b.stats) {
                    atkB = parseInt(b.stats[1].base_stat);
                } else {
                    atkB = parseInt(b.attack);
                }
                
                if (action.payload === "aNombre") return nameA.localeCompare(nameB);
                if (action.payload === "dNombre") return nameB.localeCompare(nameA);
                if (action.payload === "aAtaque") return atkA - atkB;
                if (action.payload === "dAtaque") return atkB - atkA;
                
                return 0;
            });
            
        
            return {
                ...state,
                pokemons: orderCopy
            };
    }
};

export default rootReducer;