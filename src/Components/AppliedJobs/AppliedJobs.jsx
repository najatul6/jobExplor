import { useEffect } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs= useLoaderData();
  useEffect(()=>{
const storedAppliedJobs=getStoredJobApplication();
if(storedAppliedJobs>0){
  const jobApplied=jobs.filter(job=>job.id===jobApplications)
}
  },[])
  return (
    <div className=" text-white">
      Applied Jobs
      </div>
  )
}

export default AppliedJobs