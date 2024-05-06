import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPokemons, setPage } from "../../redux/actions";
import Cards from "../Cards/Cards";
import "./Home.css";

export default function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const currentPage = useSelector((state) => state.currentPage);
    const pokemonsPerPage = 12;

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
    const maxPagesToShow = 5;

    let startPage, endPage;
    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - Math.floor(maxPagesToShow / 2);
            endPage = currentPage + Math.floor(maxPagesToShow / 2);
        }
    }

    const handlePage = (page) => {
        dispatch(setPage(page));
    };

    const handleFirstPage = () => {
        dispatch(setPage(1));
    };

    const handleLastPage = () => {
        dispatch(setPage(totalPages));
    };

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get('http://localhost:3001/pokemons');
                dispatch(setAllPokemons(response.data));
            } catch (error) {
                console.log(error.message);
                alert("Error al cargar los pokemons.");
            }
        }
        
        fetchPokemons();
    }, []);

    return (
        <div className='home'>
            <Cards pokemons={currentPokemons} />
            <div className="pagination">
                <button onClick={handleFirstPage}>Primera</button>
                {currentPage > 1 && (
                    <button onClick={() => handlePage(currentPage - 1)}>Anterior</button>
                )}
                {Array.from({ length: (endPage - startPage) + 1 }, (_, i) => i + startPage).map((num) => (
                    <button
                        key={num}
                        onClick={() => handlePage(num)}
                        className={currentPage === num ? "active" : ""}
                    >
                        {num}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button onClick={() => handlePage(currentPage + 1)}>Siguiente</button>
                )}
                <button onClick={handleLastPage}>Última</button>
            </div>
        </div>
    );
}
