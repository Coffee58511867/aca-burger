import React from 'react';
import '../App.css';



function Lattice(props) {
    return ( <
        div >
        <
        button className = "lettuce"
        id = "lattice" > { props.name } < /button> <
        /div>
    );
}

export default Lattice;