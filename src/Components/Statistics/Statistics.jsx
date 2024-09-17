import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  useEffect(() => {
    fetch("/api/v1/job/search", {  // Proxying via /api
      method: "POST",
      headers: {
        'apikey': import.meta.env.VITE_JOB_API_KEY, // Correct way to access the environment variable
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
      .catch((error) => { // Capture error message for display
        toast(error.message)
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center text-7xl text-white">
      <Helmet>
        <title>Statistics</title>
      </Helmet>
     
    </div>
  );
};

export default Statistics;
