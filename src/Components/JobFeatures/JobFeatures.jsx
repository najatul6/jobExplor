import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import JobsCard from "./JobsCard";

const JobFeatures = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <SectionHeader
        title={"Featured Jobs"}
        subTitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {jobs?.slice(0, 4).map((job) => (
          <JobsCard key={job.id} job={job} />
        ))}
      </div>
      <div className="py-10 flex justify-center items-center">
        <button className="btn bg-blue-600 text-white hover:bg-blue-800">Show More</button>
      </div>
    </div>
  );
};

export default JobFeatures;
