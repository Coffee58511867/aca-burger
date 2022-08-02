import React from 'react';
import './App.css';
function removeTomato(){
  document.getElementById("tomato")!.style.display="none";  
  
}

function Tomato() { 
  return (
    <div>
    <button className="tomato" id="tomato" onClick={removeTomato}>Tomato</button>
</div>
  );
}

export default Tomato;