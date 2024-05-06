import React from "react";
import { useLocation } from 'react-router-dom';
import "./Detail.css";

export default function Detail({ pokemons }) {
    const location = useLocation();
    const regex = /\d+/;
    const id = location.pathname.match(regex)[0];
    const pokemon = pokemons.filter((pokemon) => pokemon.id === Number(id));
    const uuidToNumber = (uuid) => {
        const hex = uuid.replace(/-/g, '');
        const number = parseInt(hex, 16);
        return number;
    };
    
    if (typeof pokemon.id === "string") {
        let newNumber = uuidToNumber(pokemon.id);
        newNumber = newNumber % 1000 ;
        pokemon.id = newNumber + 1302;
    }

    if (!pokemon[0].hasOwnProperty("origin")) {
        return (
            <div className='detail-container'>
                <div className='detail'>
                    <h2>ID: {pokemon[0].id}</h2>
                    <h4>Nombre: {pokemon[0].name.toUpperCase()}</h4>
                    <h4>Vida: {pokemon[0].stats[0].base_stat}</h4>
                    <h4>Ataque: {pokemon[0].stats[1].base_stat}</h4>
                    <h4>Defensa: {pokemon[0].stats[2].base_stat}</h4>
                    <h4>Velocidad: {pokemon[0].stats[5].base_stat}</h4>
                    <h4>Altura: {(pokemon[0].height / 10).toFixed(1)} m</h4>
                    <h4>Peso: {(pokemon[0].weight / 10).toFixed(1)} kg</h4>
                    <h4>Tipo/s: {pokemon[0].types.length === 1 ?
                    pokemon[0].types[0].type.name :
                    `${pokemon[0].types[0].type.name}, ${pokemon[0].types[1].type.name}`}</h4>
                </div>
    
                <div className="photo-container">
                    <img src={pokemon[0].front_default} alt={pokemon[0].id}/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='detail-container'>
                <div className='detail'>
                    <h2>ID: {pokemon[0].id}</h2>
                    <h4>Nombre: {pokemon[0].name.toUpperCase()}</h4>
                    <h4>Vida: {pokemon[0].health}</h4>
                    <h4>Ataque: {pokemon[0].attack}</h4>
                    <h4>Defensa: {pokemon[0].defense}</h4>
                    <h4>Velocidad: {pokemon[0].speed}</h4>
                    <h4>Altura: {(pokemon[0].height / 10).toFixed(1)} m</h4>
                    <h4>Peso: {(pokemon[0].weight / 10).toFixed(1)} kg</h4>
                    <h4>Tipo/s: {pokemon[0].Types.length === 1 ?
                    pokemon[0].Types[0].name :
                    `${pokemon[0].Types[0].name}, ${pokemon[0].Types[1].name}`}</h4>
                </div>
    
                <div className="photo-container">
                    <img src={pokemon[0].image} alt={pokemon[0].id}/>
                </div>
            </div>
        )
    }
}