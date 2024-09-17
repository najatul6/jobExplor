import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import JobsCard from "./JobsCard";
import { Link } from "react-router-dom";

const JobFeatures = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/api/v1/job/search", {
      method: "POST",
      headers: {
        apikey: import.meta.env.VITE_JOB_API_KEY, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: "Reactjs",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.hits);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <SectionHeader
        title={"Featured Jobs"}
        subTitle={
          "Explore thousands of job opportunities with all the information you need. It's your future."
        }
      />
      {error ? (
        <div className="flex justify-center items-center py-10 px-10">
         No Data Found
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 duration-300 gap-6">
          {jobs?.slice(0, 4).map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </div>
      )}

      <div className="py-10 flex justify-center items-center">
        <Link to="/statistics">
          <button className={`btn bg-dark-blue text-white hover:bg-dark-blue duration-300 ${error && "hidden"}`}>
            Show All Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobFeatures;
