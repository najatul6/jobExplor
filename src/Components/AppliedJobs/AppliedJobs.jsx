import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs,setDisplayJobs] =useState([]);

  const handleJobsFilter=filter=>{
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }else if(filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job=>job.remote_or_onsite==='Remote')
      setDisplayJobs(remoteJobs);
    }else if(filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite==='Onsite')
      setDisplayJobs(onsiteJobs);
    }
  }
  useEffect(() => {
    const storedAppliedJobs = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) =>
        storedAppliedJobs.includes(job.id)
      );
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied);
    }
  }, [jobs]);
  return (
    <div className=" text-white">
      <div className="py-20 bg-base-200  text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold capitalize">
          Applied Jobs : {appliedJobs?.length}
        </h1>
      </div>
      <div className="py-5">
        <div className="flex justify-end">
          <details className="dropdown">
            <summary className="btn m-1">Filter By <MdArrowDropDown /></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a onClick={()=>handleJobsFilter('all')}>All</a>
              </li>
              <li>
                <a onClick={()=>handleJobsFilter('remote')}>Remote</a>
              </li>
              <li>
                <a onClick={()=>handleJobsFilter('onsite')}>On site</a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          {displayJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 py-5">
              {displayJobs.map((job) => (
                <div
                  key={job.id}
                  className="border-2 border-gray-400 px-4 py-5 rounded-xl flex justify-between items-center"
                >
                  <div className="flex justify-center items-center gap-10">
                    <div className="bg-gray-600 flex justify-center items-center p-10 rounded-xl">
                      <img src={job.logo} alt={job.job_title} />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-4">
                      <h2 className="text-xl font-bold">{job.job_title}</h2>
                      <p className="text-lg">{job.company_name}</p>
                      <div className="flex justify-start gap-6 items-center">
                        <h5 className="text-lg font-bold text-blue-600 border-blue-600 bg-transparent border-2 rounded-xl py-2 px-3">
                          {job.remote_or_onsite}
                        </h5>
                        <h5 className="text-xl font-bold text-blue-600 border-blue-600 bg-transparent border-2 rounded-xl py-2 px-3">
                          {job.job_type}
                        </h5>
                      </div>
                      <div className="flex justify-start items-center gap-4">
                        <p className="flex justify-center items-center gap-2">
                          <FaLocationDot /> {job.location}
                        </p>
                        <p className="flex justify-center items-center gap-2">
                          <LuCircleDollarSign /> {job.salary}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/jobDetails/${job.id}`}>
                    <button className="btn bg-dark-blue text-white hover:bg-blue-950 outline-none border-0 text-xl capitalize">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-80 text-2xl flex justify-center items-center">
              No data Found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
