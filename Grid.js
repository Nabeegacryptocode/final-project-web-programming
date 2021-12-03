import React from 'react'
import PokemonPage from './pokemon'
import POKEMON from './POKEMONJ'
import CREATEOWN from './createyurown'


export default function Grid (props) {
  
  return (
    

    <div className="grid">
  
    {POKEMON.map((pokemon) => (
   
  <div className="module"><PokemonPage 
  
  key={pokemon.id} 
  id={pokemon.id} 
  image={pokemon.image}
  info={pokemon.description}/>
  </div>
  ))}
    
  
  {CREATEOWN.map((pokemon1) => (
 <div className="grid">
<div className="module"><PokemonPage 

key={pokemon1.id} 
id={pokemon1.id} 
image={pokemon1.image}
info={pokemon1.description}/>
</div>
</div>
))}



  </div>
  

 

  
  
  
  

  )
}