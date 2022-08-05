import React, { useState } from "react";
import "./App.css";
import TopBread from "./components/TopBread";
import Tomato from "./components/Tomato";
import Meat from "./components/Meat";
import Lattuce from "./components/Lattice";
import BaseBread from "./components/BaseBread";

function App() {
    const [showtomato, setShowTomato] = useState(true);
    const [showmeat, setShowMeat] = useState(true);
    const [showlattice, setShowLattice] = useState(true);

    function addTomato() {
        setShowTomato(true);
    }

    function removeTomato() {
        setShowTomato(false);
    }

    function addMeat() {
        setShowMeat(true);
    }

    function removeMeat() {
        setShowMeat(false);
    }

    function addLattice() {
        setShowLattice(true);
    }

    function removeLattice() {
        setShowLattice(false);
    }

    return ( <
        div className = "App" >
        <
        h1 > ACA Burger < /h1> <
        TopBread / > { showtomato && < Tomato name = "Tomato" / > } { showmeat && < Meat name = "Meat" / > } { showlattice && < Lattuce name = "Lattice" / > } <
        BaseBread / >

        <
        div >
        <
        button className = "addbtn"
        onClick = { addTomato } >
        Add Tomato <
        /button> <
        button className = "btns2"
        onClick = { removeTomato } >
        Remove Tomato <
        /button> <
        button className = "addbtn"
        onClick = { addMeat } >
        Add Meat <
        /button> <
        button className = "btns2"
        onClick = { removeMeat } >
        Remove Meat <
        /button> <
        button className = "addbtn"
        onClick = { addLattice } >
        Add Lattice <
        /button> <
        button className = "btns2"
        onClick = { removeLattice } >
        Remove Lattice <
        /button> <
        /div> <
        /div>
    );
}

export default App;