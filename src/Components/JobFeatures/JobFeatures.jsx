import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

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
      <div>
        {
          
        }
      </div>
    </div>
  );
};

export default JobFeatures;
