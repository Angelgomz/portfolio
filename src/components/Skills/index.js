import React from "react";
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills({children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
        <div className="flex justify-content-between">
          <div className="left-side">
          <p className="text-white vertical-text" data-aos="flip-up">
             not the things I hate, not the things that I'm afraid of"
            <br></br>"I wanna be defined by the things that I love.
          </p>
          </div>
          <div className="right-side">
          {children}
          </div>
        </div>
    </section>
  );
}
export {Skills}