
import NewPokemonForm from "./NewPokemonForm";
function ADDNEWPokemon () {


    function Addpokemonhandler(pokemonData) {
fetch(
    'https://api-for-final-default-rtdb.firebaseio.com/pokemon.json',
    {

        method:'POST',
        body:JSON.stringify(pokemonData),
      
    }
);
}

    
return (
        <div>
    <NewPokemonForm onAddpokemon={Addpokemonhandler}/>

        </div>
    )
    
}
export default ADDNEWPokemon;