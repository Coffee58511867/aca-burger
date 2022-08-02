import React from 'react';
import './App.css';
import TopBread from './components/TopBread';
import Tomato from './components/Tomato';
import Meat from './components/Meat';
import Lattuce from './components/Lattuce';
import BaseBread from './components/BaseBread';


function App() {
  return (
    <div className="App">
    <h1>ACA Burger</h1>
       <TopBread/>
       <Tomato/>
       <Meat/>
       <Lattuce/>
       <BaseBread/>

    </div>
  );
}

export default App;
