import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  // const [filterdJob, setFilterdJob] = useState();
  useEffect(() => {
    const storedAppliedJobs = getStoredJobApplication();
    if (storedAppliedJobs > 0) {
      const jobApplied = jobs.filter((job) =>
        storedAppliedJobs.include(job.id)
      );
      console.log(jobApplied);
    }
  }, []);
  return (
    <div className=" text-white">
      Applied Jobs
      <h2>Helo world</h2>
    </div>
  );
};

export default AppliedJobs;
