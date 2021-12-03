import classes from './searchbar2.module.css'
import JSONDATA from "./poke_data.json";
import POKEMON from './POKEMONJ';
import { useState } from "react";
import NewPokemonForm from './NewPokemonForm';

function Searchbar2() {
function submithandler(props){
    fetch(
        'https://api-for-final-default-rtdb.firebaseio.com/pokemon.json',
        {
    
            method:'POST',
            body:JSON.stringify(props.id
                ,props.image,props.info),
          
        }
    );

}
 
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={classes.App}>
      <input
        type="text"
        placeholder="Search for a Pokemon..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.Pokemon.toLocaleLowerCase().includes(
            searchTerm.toLocaleLowerCase()
          )
        ) {
          return val;
        }
        


           
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <button className={classes.pokebut} id={val.Nat} image={val.image} info={val.Pokemon} type="submit" onSubmit={submithandler}>{val.Pokemon} </button>
          </div>
        );
      })}
    </div>
  );
}

export default Searchbar2;
