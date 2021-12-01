function Pokemoninfooverlay(props) {
    return(
<div>

    <div className='modal'>
      
      <p>{props.text}</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <button className='Done' onClick={props.onClose}>
        Done
      </button>
     
    </div>
    </div>
    


    );
}
export default Pokemoninfooverlay;