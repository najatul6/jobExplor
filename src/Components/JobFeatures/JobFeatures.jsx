import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import JobsCard from "./JobsCard";

const JobFeatures = () => {
  const [jobs, setJobs] = useState([]);
  const [isShow, setIsShow] = useState(false);
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
      <div className="grid grid-cols-1 lg:grid-cols-2 duration-300 gap-6">
        {isShow
          ? jobs?.map((job) => <JobsCard key={job.id} job={job} />)
          : jobs?.slice(0, 4).map((job) => <JobsCard key={job.id} job={job} />)}
      </div>
      <div className="py-10 flex justify-center items-center">
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn bg-dark-blue text-white hover:bg-dark-blue duration-300"
        >
          {isShow ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default JobFeatures;
