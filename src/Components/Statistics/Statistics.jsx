import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import JobsCard from "../JobFeatures/JobsCard";

const Statistics = () => {
  const [jobs, setJobs] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [error,setError] = useState();
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
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center text-7xl text-white">
      <Helmet>
        <title>Statistics</title>
      </Helmet>
        {error?<div className="flex justify-center items-center py-10 px-10">{error}</div>:<div className="grid grid-cols-1 lg:grid-cols-2 duration-300 gap-6">
      {isShow
          ? jobs?.map((job,idx) => <JobsCard key={idx} job={job} />)
          : jobs
              ?.slice(0, 10)
              .map((job,index) => <JobsCard key={index} job={job} />)}
      </div>}
      
      <div className={`py-10 flex justify-center items-center ${error && "hidden"}`}>
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

export default Statistics;
