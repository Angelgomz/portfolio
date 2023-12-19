import React from "react";
import './App.css';
import DotRing from "./components/DotRing/DotRing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import {Item} from "./components/Item";
function App() {

  return (
    <React.Fragment>
      <DotRing/>
      <div className="container">
      <Navbar/>
      <About/>
      <Skills>
      <Item/>
      </Skills> 
      </div>
      </React.Fragment>
  );
}

export default App;
