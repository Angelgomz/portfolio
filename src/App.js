import React from "react";
import './App.css';
import DotRing from "./components/DotRing/DotRing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import {Item} from "./components/Item";
import {Contact} from "./components/Contact";
function App() {

  return (
    <>
      <DotRing/>
      <div className="container">
      <Navbar/>
      <About/>
      <Skills>
      <Item/>
      </Skills> 
      <Contact>
        
      </Contact>
      </div>
    </>
  );
}

export default App;
