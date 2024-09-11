import { useEffect } from "react";
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
      setAppliedJobs(jobApplied)
    }
  }, [jobs]);
  return (
    <div className=" text-white">
      Applied Jobs : {appliedJobs?.length}
      <h2>Hello world</h2>
    </div>
  );
};

export default AppliedJobs;
