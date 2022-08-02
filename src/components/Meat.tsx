import React from 'react';
import '../App.css';

function removeMeat(){
  document.getElementById("meat")!.style.display="none";  
  
}

function Meat() {
  return (
    <div>
    <button className="meat" id="meat" onClick={removeMeat}>Meat</button>
</div>
  );
}

export default Meat;