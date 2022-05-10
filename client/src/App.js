import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../src/components/home';
import Allpokemons from './components/allpokemons';
import Pokemon from './components/pokemon';
import Createpokemons from './components/Createpokemon';
import Search from './components/search'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/pokemons' element={<Allpokemons />} />
      <Route path='/pokemons/:id' element={<Pokemon />} />
      <Route path='/Create/'element={<Createpokemons />} />
      <Route path='pokemons/search/:name' element={<Search/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
