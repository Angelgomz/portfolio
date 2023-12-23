import React, { useState } from "react";
import './App.css';
import DotRing from "./components/DotRing/DotRing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import {Item} from "./components/Item";
import {Contact} from "./components/Contact";
import {Search} from "./components/Search";
import {Work} from "./components/Work";
import {List} from "./components/List";
function App() {
  const [searchValue,setSearchValue] = useState('');
  const jobs = [
    {text:'Sudo.CL',description:"I worked as semisenior fullstack developer, making projects from beginning in Laravel, maintenance of frontend applications (React, Vue, JS  ), database administration, build API's and webhooks. Involved in ecommerce projects (Shopify, Meli, BSale..).", 'years':'feb 2022 - now'},
    {text:'Social Media Real Time Spa',description:"Social Media Real Time Spa's worked as fullstack developer, making tasks and projects builded mostly PHP, JavaScript Libraries(Vue + JQuery + React)",'years':'ene 2020 - feb 2022'},
    {text:'NetRed',description:"NetRed's as developer web junior. I started working making HTML5+CSS3 templates, learning JavaScript animations, JQuery functions and being support engineer in websites like: Prisa, Prisma, RedSalud..",'years':'nov 2018 - mar 2019'},  
    ];
    const searchedJobs = jobs.filter(
      (job) => {
          return (job.text.includes(searchValue) ||  job.description.includes(searchValue)) && searchValue.length > 0;
      }
    )
  return (
    <>
      <DotRing/>
      <div className="container">
      <Navbar/>
      <About/>
      <Skills>
      <Item/>
      </Skills> 
      <Work>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <List searchValue={searchValue} searchedJobs={searchedJobs} jobs={jobs}/>
      </Work>
      <Contact/>
      </div>
    </>
  );
}

export default App;
