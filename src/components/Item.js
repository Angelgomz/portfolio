import React, { Fragment } from "react";

function Item() {
  const handleMouse = (event) => {
    console.log(event.target);
  };
  return (
    <Fragment>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text">FrontEnd Habilities</p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text">JavaScript</p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> React - VueJS </p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> BackEnd</p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> Laravel</p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text">CSS - HTML 5 </p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text">Responsive Design </p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> Animations </p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> Scrum </p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> Creativity </p>
      </div>
      <div className="item text-white uppercase" onMouseMove={handleMouse}>
        <p className="item-text"> Swiftie </p>
      </div>
    </Fragment>
  );
}

export { Item };
