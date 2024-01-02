import React, { useState } from "react";
import '../App/index.css';
import DotRing from "../DotRing/DotRing";
import {Navbar} from "../Navbar";
import {About} from "../About";
import {Skills} from "../Skills";
import {Item} from "../Item";
import {Contact} from "../Contact";
import {Search} from "../Search";
import {Work} from "../Work";
import {List} from "../List"; 
function App() {
  const [searchValue,setSearchValue] = useState('');
  const [activities,setActivities] = useState([
    {text:'FrontEnd abilities',},
    {text:'JavaScript - React - Vue - JQuery',cheked:false},
    {text:'BackEnd Maintence',checked:false},
    {text:'Laravel - PHP',checked:false},
    {text:'CSS3 - HTML 5',checked:false},
    {text:"Build Apis - Integrations",checked:false},
    {text:'Database admin',checked:false},
    {text:'Responsive Design',checked:false},
    {text:'Basic knowdlege AWS',checked:false}]);
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
    const checkedActivity = (text) =>{
      const newActivities = [...activities];
      let activityIndex = activities.findIndex(
       (activity) => activity.text === text
        );
      newActivities[activityIndex].checked = true;
      setActivities(newActivities);
    };
  return (
    <>
      <DotRing/>
      <div className="container">
      <Navbar/>
      <About/>
      <Skills>
        {activities.map(activity => (
         <Item key={activity.text} text={activity.text} checked={activity.checked} onChecked={() => checkedActivity(activity.text)}/>
        ))}
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
