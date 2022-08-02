import React from 'react';
import '../App.css';

function removeLattuce(){
  document.getElementById("lattuce")!.style.display="none";  
  
}

function Lattuce() {
  return (
    <div>
    <button className="lettuce" id="lattuce" onClick={removeLattuce}>Lattuce</button>
</div>
  );
}

export default Lattuce;