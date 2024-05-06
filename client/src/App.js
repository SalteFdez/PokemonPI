import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Nav from './components/Nav/Nav.jsx';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail pokemons={pokemons}/>}/>
        <Route path='/form' element={<Form pokemons={pokemons}/>}/>
      </Routes>
    </div>
  );
}

export default App;
