import React from 'react';
import Arrow from './../assets/arrow.svg';
function Contact() {
    const addStyles = (event) => {
     document.getElementsByClassName('ring')[0].classList.add('ring-contact');
     document.getElementsByClassName('dot')[0].classList.add('dot-contact');
      }
    const removeStyles = (event) => {
    document.getElementsByClassName('ring')[0].classList.remove('ring-contact');
    document.getElementsByClassName('dot')[0].classList.remove('dot-contact');
    }
  return (
    <>
    <div className='flex justify-content-between m4-10 flex-column-mobile'>
        <div className=" left-side flex justify-content-center align-items-center">
           <div onMouseOver={addStyles} onMouseOut={removeStyles}>
            <a href="mailto:angelgomz14@gmail.com"  target="_blank" rel="noreferrer" className="btn-contact"> 
            GET IN TOUCH </a>
            </div>
        </div>
        <div className="right-side" style={{padding:'10%'}}>
           <div class="social-media flex flex-column align-items-end justify-content-end">
              <div className="flex pt-1 social-media-icon">
                <a href="https://www.linkedin.com/in/angel-g-7b9317143/" rel="noreferrer"  target="_blank">LinkedIn</a>
                <img src={Arrow} alt="arrow" className="icon-arrow"></img>
              </div>  
              <div className="flex pt-1 social-media-icon">
              <a href="https://github.com/Angelgomz/"rel="noreferrer"  target="_blank">GitHub  </a>
              <img src={Arrow} alt="arrow" className="icon-arrow"></img>
                </div>
           </div>
        </div>
    </div>
    </>
  )
}

export {Contact}