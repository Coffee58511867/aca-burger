import React from 'react'
import './App.css';
import TopBread from './components/TopBread';
import Tomato from './components/Tomato';
import Meat from './components/Meat';
import Lattuce from './components/Lattice';
import BaseBread from './components/BaseBread';


function App() {
    function addTomato() {
        document.getElementById("tomato").style.display = "block";

    }

    function removeTomato() {
        document.getElementById("tomato").style.display = "none";
    }

    function addMeat() {
        document.getElementById("meat").style.display = "block";

    }

    function removeMeat() {
        document.getElementById("meat").style.display = "none";
    }

    function addLattice() {
        document.getElementById("lattice").style.display = "block";

    }

    function removeLattice() {
        document.getElementById("lattice").style.display = "none";
    }

    return ( <
        div className = "App" >

        <
        h1 > ACA Burger < /h1> <
        TopBread / >
        <
        Tomato name = "Tomato" / >
        <
        Meat name = "Meat" / >
        <
        Lattuce name = "Lattice" / >
        <
        BaseBread / >

        <
        div >
        <
        button className = "addbtn"
        onClick = { addTomato } > Add Tomato < /button> <
        button className = "btns2"
        onClick = { removeTomato } > Remove Tomato < /button> <
        button className = "addbtn"
        onClick = { addMeat } > Add Meat < /button> <
        button className = "btns2"
        onClick = { removeMeat } > Remove Meat < /button> <
        button className = "addbtn"
        onClick = { addLattice } > Add Lattice < /button> <
        button className = "btns2"
        onClick = { removeLattice } > Remove Lattice < /button>

        <
        /div>


        <
        /div>
    );
}

export default App;