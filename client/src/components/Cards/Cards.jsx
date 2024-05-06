import Card from '../Card/Card';
import "./Cards.css";

export default function Cards({ pokemons }) {
    
    const uuidToNumber = (uuid) => {
        const hex = uuid.replace(/-/g, '');
        const number = parseInt(hex, 16);
        return number;
    };

    const cardComponents = pokemons.map((pokemon) => {
        if (typeof pokemon.id === "string") {
            let newNumber = uuidToNumber(pokemon.id);
            newNumber = newNumber % 1000 ;
            pokemon.id = newNumber + 1302;
        }
        if (pokemon.front_default) {
            return (
                <Card
                    key = {pokemon.id}
                    id = {pokemon.id}
                    name = {pokemon.name}
                    image = {pokemon.front_default}
                    types = {pokemon.types || pokemon.Types}
                />
            )
        } else {
            return (
                <Card
                    key = {pokemon.id}
                    id = {pokemon.id}
                    name = {pokemon.name}
                    image = {pokemon.image}
                    types = {pokemon.types || pokemon.Types}
                />
            )
        }
    })

    return <div className="card-grid">{cardComponents}</div>;
};