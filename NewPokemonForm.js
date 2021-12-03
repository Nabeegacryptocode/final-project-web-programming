
import {useRef} from 'react'
function NewPokemonForm(props) {
    const pictureInputRef =useRef();
    const IdInputRef =useRef();
    const DescriptionInputRef =useRef();
    function submitHandler(event) {
event.preventDefault();

const enteredPicture = pictureInputRef.current.value;
const enteredID = IdInputRef.current.value;
const enteredDescription = DescriptionInputRef.current.value;


const pokemonData = {
    id:enteredID,
    image:enteredPicture,
    Description:enteredDescription
}
props.onAddpokemon(pokemonData);
    }
return(
    <div>
                <form className="ADNEWPOLE" onSubmit={submitHandler} >
                <div  id="Picture"  placeholder="Picture" className="Hed1">
                <h1>Picture URL</h1>
<input className="DEF"  type='url' required id="Pic" ref={pictureInputRef}></input>
                </div>

<br/>

<div className="Hed2">
<h1>ID</h1>
<input className="DEF" type="number" required id='ID' ref={IdInputRef}></input>
</div>
<br/>

<div className="Hed3">
<h1 >Description</h1>
<textarea className="DEF" rows="5" required id='Description' ref={DescriptionInputRef}></textarea>
</div>
<br/>
<br/>
<br/>
<br/>


<div>
    <button   type="Submit" className='Done'   >Submit</button></div>
            </form>
    </div>
)
}
export default NewPokemonForm;