import React from 'react'
import PokemonPage from './pokemon'
import POKEMON from './POKEMONJ'



export default function Grid (props) {
  
  return (
    

    <div className="grid">
  
    {POKEMON.map((pokemon) => (
   
  <div className="module"> <PokemonPage 
  
  key={pokemon.id} 
  id={pokemon.id} 
  image={pokemon.image}
  info={pokemon.description}/>
  </div>
  ))}



  </div>
  

 

  
  
  
  

  )
}