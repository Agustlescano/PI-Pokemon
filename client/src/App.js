import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../src/components/home';
import Allpokemons from './components/allpokemons';
import Pokemon from './components/pokemon';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/pokemons' element={<Allpokemons />} />
      <Route path='/pokemons/:id' element={<Pokemon />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
