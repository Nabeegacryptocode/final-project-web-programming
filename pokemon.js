
import Backdrop from './background';


import Pokemoninfooverlay from "./pokemoninfo";
import { useState } from 'react';


function PokemonPage(props){
  const [showModal, setShowModal] = useState();

  function Pokemoninfooverlayopen() {
    setShowModal(true);
  }

  function Pokemoninfooverlayclose() {
    setShowModal(false);
  }

    return (<div>
        <button className="poke" onClick={Pokemoninfooverlayopen}>
     <img className="pic" src={props.image} alt={props.description} />
       </button>
       {showModal && <Backdrop onClick={Pokemoninfooverlayclose} />}
      {showModal && <Pokemoninfooverlay text={props.info} onClose={Pokemoninfooverlayclose} />}
       </div>
    
    );}
export default PokemonPage;