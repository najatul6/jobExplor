import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

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
        <h1 className="text-4xl font-bold uppercase">
          Applied Jobs : {appliedJobs?.length}
        </h1>
      </div>
    </div>
  );
};

export default AppliedJobs;
