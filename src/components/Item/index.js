import React, { Fragment } from "react";

function Item({...props}) {
  const handleMouse = (event) => {
    event.target.classList.add("item-mouse-move");
  }
  return (
    <Fragment>
        <div className="item text-white uppercase"  data-aos="fade-up" onMouseOut={props.onChecked} onMouseMove={handleMouse}>
          <p className="item-text">{props.text}</p>
        </div>
    </Fragment>
  );
}

export { Item };
