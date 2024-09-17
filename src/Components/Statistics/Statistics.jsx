import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JobsCard from "../JobFeatures/JobsCard";

const Statistics = () => {
  const [jobs, setJobs] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    fetch("/api/v1/job/search", {
      // Proxying via /api
      method: "POST",
      headers: {
        apikey: import.meta.env.VITE_JOB_API_KEY, // Correct way to access the environment variable
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
        // Capture error message for display
        toast(error.message);
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center text-7xl text-white">
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2 duration-300 gap-6">
        {isShow
          ? jobs?.map((job) => <JobsCard key={job.id} job={job} />)
          : jobs?.slice(0, 10).map((job) => <JobsCard key={job.id} job={job} />)}
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

export default Statistics;
