import { useState } from 'react';
import Validation from '../Validation/Validation.jsx';
import "./Form.css"
import axios from 'axios';

export default function Form() {

    const [ userData, setUserData ] = useState({
        name: '' ,
        image: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        type1: '',
        type2: ''
    });

    const [ errors, setErrors ] = useState({
        name: '' ,
        image: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        type1: '',
        type2: ''
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            console.log(userData)
            const response = await axios.post('http://localhost:3001/pokemons', userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            
            if (response.status === 200) {
                alert("Se ha subido tu pokemon a la base de datos.")
            } else {
                alert("Algo ha salido mal.")
            }

        } catch (error) {
            console.log(error.message);
            alert("Algo ha salido mal.")
        }
    }

    return (
        <div>
            <form className='userForm'>
                <div className="form-group">
                    <label htmlFor='name'>Nombre:</label>
                    <input type='text' name='name' value={userData.name} onChange={handleChange}/>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='health'>Vida:</label>
                    <input type='text' name='health' value={userData.health} onChange={handleChange}/>
                    {errors.health && <span className="error-message">{errors.health}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='attack'>Ataque:</label>
                    <input type='text' name='attack' value={userData.attack} onChange={handleChange}/>
                    {errors.attack && <span className="error-message">{errors.attack}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='defense'>Defensa:</label>
                    <input type='text' name='defense' value={userData.defense} onChange={handleChange}/>
                    {errors.defense && <span className="error-message">{errors.defense}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='speed'>Velocidad:</label>
                    <input type='text' name='speed' value={userData.speed} onChange={handleChange}/>
                    {errors.speed && <span className="error-message">{errors.speed}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='height'>Altura:</label>
                    <input type='text' name='height' value={userData.height} onChange={handleChange}/>
                    {errors.height && <span className="error-message">{errors.height}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='weight'>Peso:</label>
                    <input type='text' name='weight' value={userData.weight} onChange={handleChange}/>
                    {errors.weight && <span className="error-message">{errors.weight}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='image'>Imagen:</label>
                    <input type='text' name='image' value={userData.image} onChange={handleChange}/>
                    {errors.image && <span className="error-message">{errors.image}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor='type1'>Tipo 1:</label>
                    <select name='type1' value={userData.type1} onChange={handleChange}>
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
                </div>

                <div className="form-group">
                    <label htmlFor='type2'>Tipo 2:</label>
                    <select name='type2' value={userData.type2} onChange={handleChange}>
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
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
