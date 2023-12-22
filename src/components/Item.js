import React, { Fragment } from "react";

const activities = [
{text:'FrontEnd abilities'},
{text:'JavaScript'},
{text:'React - Vue.JS'},
{text:'BackEnd'},
{text:'Laravel - PHP'},
{text:'CSS3 - HTML 5'},
{text:'Database admin'},
{text:'Responsive Design'},
{text:'Animations'},
{text:'Creativity'},
];

function Item() {
  const handleMouse = (event) => {
    event.target.classList.add("item-mouse-move");
  }
  return (
    <Fragment>
      { activities && activities.map(function(activity){
       return (
        <div className="item text-white uppercase"  data-aos="fade-up" onMouseMove={handleMouse}>
          <p className="item-text">{activity.text}</p>
        </div>
      )
       })}
    </Fragment>
  );
}

export { Item };
