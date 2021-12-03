

import classes from './searchbar.module.css'
import { useState } from "react";
import ALLPOKEMON from "./poke_data.js";
import PokemonPage from './pokemon';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (<div>
    <div className={classes.App2}> <input className={classes.inpu}
        type="text"
        placeholder="Search for a Pokemon..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      /></div>
    <div className={classes.App}>
     
      {ALLPOKEMON.filter((val) => {
        if (searchTerm === "") {
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
          <div className={classes.grid} key={key}>
            <div className={classes.module} key={key}>
            <PokemonPage image={val.image} info={val['Type I'] }/>
            
            <p className={classes.po}>{val.Pokemon} </p>
          </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Searchbar;
