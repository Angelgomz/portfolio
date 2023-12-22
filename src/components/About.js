import React from "react";
import Sun from './../assets/sun.svg';
export default function About(props) {
  return (
    <section className="flex justify-content-start flex-column">
    <div className="about"> 
           <h1 className="uppercase font-bold text-white"> 
           <div className="d-inline"> S </div>
           <div className="d-inline"> O </div>
           <div className="d-inline"> F  </div>
           <div className="d-inline"> T </div>
           <div className="d-inline"> W </div>
           <div className="d-inline"> A </div>  
           <div className="d-inline"> R </div>
           <div className="d-inline"> E </div>
            <br></br>
           <span className="ml-10 whitespace-nowrap"></span>
           <div className="d-inline"> D </div>
           <div className="d-inline"> E </div>
           <div className="d-inline"> V </div>
           <div className="d-inline"> E </div>
           <div className="d-inline"> L </div>
           <div className="d-inline"> O </div>
           <div className="d-inline"> P </div>
           <div className="d-inline"> E </div>
           <div className="d-inline"> R </div>
         </h1>
      </div>
         <div className="flex justify-content-between align-items-between about-bottom">
            <div className="container-circle">
            <span className="circle styles_circle_1 text-white">s</span>
            <span className="circle styles_circle_2 text-white">c</span>
            <span className="circle styles_circle_3 text-white">r</span>
            <span className="circle styles_circle_4 text-white">o</span>
            <span className="circle styles_circle_5 text-white">l</span>
            <span className="circle styles_circle_6 text-white">l</span>
            <span className="circle styles_circle_7 text-white">d</span>
            <span className="circle styles_circle_8 text-white">o</span>
            <span className="circle styles_circle_9 text-white">w</span>
            <span className="circle styles_circle_10 text-white">n</span>
            </div>
          <div className="flex flex-column align-items-end">
                <div>
                <div className="flex">
                  <div className="flex"> 
                  <p className="text-white title uppercase">Open to Work</p>
                  <img src={Sun} alt="sun-gif" className="sun-gif"></img>
                  </div>
                </div>
                <p className="text-white subtitle">Based to Chile</p>
                </div>
          </div>
          </div>
    </section>
  );
}