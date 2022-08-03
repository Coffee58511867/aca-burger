import React from 'react';
import '../App.css';

function Tomato(props) {
    return ( <
        div >
        <
        button className = "tomato"
        id = "tomato" > { props.name } < /button> <
        /div>
    );
}

export default Tomato;