import React, { Fragment, useState, useEffect } from "react";
function Item() {
  const checkedActivity = (text) => {
    const newActivities = [...activities];
    let activityIndex = activities.findIndex(
      (activity) => activity.text === text
    );
    newActivities[activityIndex].checked = true;
    setActivities(newActivities);
  };
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    setActivities([
      { text: "BackEnd Maintence", checked: false },
      { text: "Laravel - PHP", checked: false },
      { text: "FrontEnd abilities" },
      { text: "JavaScript - React - Vue - Angular- JQuery", cheked: false },
      { text: "CSS3 - HTML 5", checked: false },
      { text: "Build Apis - Integrations", checked: false },
      { text: "Database admin", checked: false },
      { text: "Responsive Design", checked: false },
      { text: "Basic knowdlege AWS", checked: false },
    ]);
  }, []);
  const handleMouse = (event) => {
    event.target.classList.add("item-mouse-move");
  };
  return (
    <>
      {activities.map(function (activity,i) {
        return (
          <Fragment>
            <div key={i}
              className="item text-white uppercase"
              data-aos="fade-up"
              onMouseOut={() => checkedActivity(activity.text)}
              onMouseMove={handleMouse}
            >
               <p key ={activity.text} className="item-text">{activity.text}</p>
            </div>
          </Fragment>
        );
      })}
      ;
    </>
  );
}

export { Item };
