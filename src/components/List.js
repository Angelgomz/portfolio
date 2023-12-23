import React from 'react'
import Sun from './../assets/sun.svg';
function List({jobs,searchedJobs}) {
  const jobList = searchedJobs.length > 0  ? searchedJobs : jobs;
  return (
    <> 
    <div className="flex justify-content-start align-items-center pt-7">
      <div>
         <p className='text-white title uppercase'>Work - Experience </p>
      </div>
      <div>
          <img src={Sun} alt="sun-gif" className="sun-gif"></img>
      </div>
      </div>
      <div className="flex flex-column">
      { jobList && jobList.map(function(job){
       return (
        <div>
        <hr></hr>
          <div className="" data-aos="fade-right">
            <div className="flex justify-content-between">
            <div className="title-list">
               <p className="list-text text-white uppercase font-bold">{job.text}</p>
               <p className="text-white font-bold">{job.years}</p>
            </div>
            <div className="description-list">
              <p className="text-white ellipsis">{job.description}</p>
            </div>
            </div>
          </div>
        </div>
      )
       })}
     </div> 
   </>
  )
}

export {List}