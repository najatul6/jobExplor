import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedAppliedJobs = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) =>
        storedAppliedJobs.includes(job.id)
      );
      setAppliedJobs(jobApplied);
    }
  }, [jobs]);
  return (
    <div className=" text-white">
      <div className="py-20 bg-base-200  text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold capitalize">
          Applied Jobs : {appliedJobs?.length}
        </h1>
      </div>
      {appliedJobs.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 py-20">
          {appliedJobs.map((job) => (
            <div key={job.id} className="border-2 border-gray-400 p-4">
              <div>
                <img src={job.logo} alt={job.job_title} />
              </div>
              <h2>{job.job_title}</h2>
              <p>{job.company_name}</p>
              <div>
                <p>
                  <FaLocationDot /> {job.location}
                </p>
                <p>
                  <LuCircleDollarSign /> {job.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="min-h-80 text-2xl flex justify-center items-center">
          No data Found!
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
