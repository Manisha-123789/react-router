import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
  const JobDetailsData = useLoaderData();
  console.log(JobDetailsData);
  return (
    <div>
      <h1><b>Tittle : </b>{JobDetailsData.title}</h1>
      <h1><b>Company : </b>{JobDetailsData.company}</h1>
      <h1><b>Location : </b>{JobDetailsData.location}</h1>
      <h1><b>Department : </b>{JobDetailsData.department}</h1>
      <h1><b>Status : </b>{JobDetailsData.status}</h1>
      
    </div>
  )
}

export default JobDetails

// export const jobDetailsThroughId = async ({ params }) => {
//   const job_id = params;
//   const res = await fetch('http://localhost:5000/jobs');
//   console.log(19, res);
//   res.map((res) => {
//     if (res.job_id == job_id) {
//       return res.title;
//     }
//   })

// }

export const jobDetailsThroughId = async ({ params }) => {
  const id = params;
  console.log(30, typeof id.id);
  const result = await fetch('http://localhost:5000/jobs');
  console.log(32, result);
  const data = await result.json();
  console.log(34, data);
  console.log(data.map((res) => 
    res.id
  ))
  const job = data.find((res) => res.id.toString() === id.id);

  if(!job){
    throw Error('Could not Found Job Details');
  }
  console.log(36, job);
  console.log(36, typeof job.id);
  return job;
}
