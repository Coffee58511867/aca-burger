import React from 'react';
import '../App.css';



function Meat(props) {
    return ( <
        div >
        <
        button className = "meat"
        id = "meat" > { props.name } < /button> <
        /div>
    );
}

export default Meat;