import Allpokemonheader from './components/opheader';

import './App.css';
import Grid from './components/Grid';
import React from 'react';

import Searchbar from './components/searchbar';
import ALLPOKEMON from './components/poke_data';

function App() {
  return (
    <div className="App">
   <span className="headie1">Poke</span>
   <span className="headie2">dex</span>
 
      <div>
<div>
<span className="headie3">My </span>
<span className="headie4"> Collection</span>
</div>


</div>
     <Grid/>
     <Allpokemonheader/>
     <Searchbar/>
       
    </div>
       
      
  );
}

export default App;
