
import logo from './logo.svg';
import './App.css';
import PokemonPage from './components/pokemon';

function App() {
  return (
    <div>
    <PokemonPage text="pokedex" />
    <PokemonPage/>
    </div>
  );
}

export default App;
