
function Pokemoninfooverlay(props) {
    return(
<div>

    <div className='modal'>
      
   <p>
     {props.text}
   </p>
  
   
 
      

 <button className='Done' onClick={props.onClose}>
        EXIT
      </button>
      
     
    </div>
    </div>
    


    );
}
export default Pokemoninfooverlay;