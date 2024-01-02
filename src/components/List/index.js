import { React, useContext } from "react";
import { SearchContext } from "../../context/search-context";
import Sun from "./../../assets/sun.svg";
function List() {
  const context = useContext(SearchContext);
  const jobs = [
    {
      text: "Sudo.CL",
      description:
        "I worked as semisenior fullstack developer, making projects from beginning in Laravel, maintenance of frontend applications (React, Vue, JS  ), database administration, build API's and webhooks. Involved in ecommerce projects (Shopify, Meli, BSale..).",
      years: "feb 2022 - now",
    },
    {
      text: "Social Media Real Time Spa",
      description:
        "Social Media Real Time Spa's worked as fullstack developer, making tasks and projects builded mostly PHP, JavaScript Libraries(Vue + JQuery + React)",
      years: "ene 2020 - feb 2022",
    },
    {
      text: "NetRed",
      description:
        "NetRed's as developer web junior. I started working making HTML5+CSS3 templates, learning JavaScript animations, JQuery functions and being support engineer in websites like: Prisa, Prisma, RedSalud..",
      years: "nov 2018 - mar 2019",
    },
  ];
  const searchedJobs = jobs.filter((job) => {
    return (
      (job.text.includes(context.searchValue) ||
        job.description.includes(context.searchValue)) &&
      context.searchValue.length > 0
    );
  });
  const jobList = searchedJobs.length > 0 ? searchedJobs : jobs;
  return (
    <>
      <div className="flex justify-content-start align-items-center pt-7">
        <div>
          <p className="text-white title uppercase">Work - Experience </p>
        </div>
        <div>
          <img src={Sun} alt="sun-gif" className="sun-gif"></img>
        </div>
      </div>
      <div className="flex flex-column">
        {jobList &&
          jobList.map(function (job, i) {
            return (
              <div key={i}>
                <hr></hr>
                <div className="" data-aos="fade-right">
                  <div className="flex justify-content-between">
                    <div className="title-list">
                      <p className="list-text text-white uppercase font-bold">
                        {job.text}
                      </p>
                      <p className="text-white font-bold">{job.years}</p>
                    </div>
                    <div className="description-list">
                      <p className="text-white ellipsis">{job.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export { List };
