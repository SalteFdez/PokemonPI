import { useState } from 'react';
import './SearchBar.css';
import { filterPokemonsByType, filterPokemonsByName, filterPokemonsByOrigin, orderPokemons, setPage } from "../../redux/actions";
import { useDispatch } from 'react-redux';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(filterPokemonsByName(name));
        setName('');
    };

    const handleFilterType = event => {
        dispatch(filterPokemonsByType(event.target.value));
        dispatch(setPage(1));
    };

    const handleFilterOrigin = event => {
        dispatch(filterPokemonsByOrigin(event.target.value));
        dispatch(setPage(1));
    };

    const handleOrder = event => {
        dispatch(orderPokemons(event.target.value));
    };

    return (
        <div className='searchBar'>
            <input type='search' onChange={handleChange} value={name}/>
            <button onClick={handleClick}>Buscar</button>
            <select name="type" onChange={handleFilterType}>
                <option value="All">Todos</option>
                <option value="normal">Normal</option>
                <option value="fighting">Lucha</option>
                <option value="flying">Volador</option>
                <option value="poison">Veneno</option>
                <option value="ground">Tierra</option>
                <option value="rock">Roca</option>
                <option value="bug">Bicho</option>
                <option value="ghost">Fantasma</option>
                <option value="steel">Acero</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="grass">Planta</option>
                <option value="electric">Electrico</option>
                <option value="psychic">Psiquico</option>
                <option value="ice">Hielo</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Siniestro</option>
                <option value="fairy">Hada</option>
            </select>
            <select name="type" onChange={handleFilterOrigin}>
                <option value="All">Todos</option>
                <option value="db">Base de Datos</option>
                <option value="api">API</option>
            </select>
            <select name="order" onChange={handleOrder}>
              <option value="aNombre">Ascendente alfabetico</option>
              <option value="dNombre">Descendente alfabetico</option>
              <option value="aAtaque">Ataque ascendente</option>
              <option value="dAtaque">Ataque descendente</option>
            </select>
        </div>
    );
};