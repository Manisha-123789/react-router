import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

const Jobs = () => {
  const jobsDataInformation = useLoaderData();
  console.log(jobsDataInformation);
  return (
    <div>
      {jobsDataInformation.map((jobs) => (
        <NavLink key={jobs.job_id} to={jobs.id.toString()} >
          <div>
            <h1 > Tittle : {jobs.title}</h1>
            <h1>Company : {jobs.company}</h1>
            <NavLink to={jobs.id.toString()}>  <button>Full Details</button></NavLink>
            <hr />
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Jobs

export const jobsData = async () => {
  const result = await fetch('http://localhost:5000/jobs');
  return result.json();
}
