import React, { useState, useEffect } from "react"
import DotRing from "../DotRing/DotRing"
import { Navbar } from "../Navbar"
import { About } from "../About"
import { Skills } from "../Skills"
import { Item } from "../Item"
import { Contact } from "../Contact"
import { Search } from "../Search"
import { Work } from "../Work"
import { List } from "../List"
import { Loader } from "../Loader"
import "../App/index.css"
function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    try{
    setLoading(false)
    }
    catch(e){
      setLoading(false)
      setError(true)
    }
  }, [])
  return (
    <>
      {error && <p> Algo salió mal intenta de nuevo. </p>}
      {loading ? ( <Loader />) : (
        <div className="container">
          <DotRing/>
          <Navbar />
          <About />
          <Skills>
              <Item/>
          </Skills>
          <Work>
            <Search/>
            <List/>
          </Work>
          <Contact/>
        </div>
      )}
    </>
  );
}

export default App;
