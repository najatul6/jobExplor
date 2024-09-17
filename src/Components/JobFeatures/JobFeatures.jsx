import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import JobsCard from "./JobsCard";
import { Link } from "react-router-dom";

const JobFeatures = () => {
  const [jobs, setJobs] = useState([]);
  const [error,setError] = useState();

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
        console.error("Error:", error);
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

      <div className="grid grid-cols-1 lg:grid-cols-2 duration-300 gap-6">
        {jobs?.slice(0, 4).map((job) => (
          <JobsCard key={job.id} job={job} />
        ))}
      </div>
      <div className="py-10 flex justify-center items-center">
        <Link to='/statistics'>
          <button className="btn bg-dark-blue text-white hover:bg-dark-blue duration-300">
            Show All Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobFeatures;

// -----------------------Previous Topic-------------------------

// import { useEffect, useState } from "react";
// import SectionHeader from "../Shared/SectionHeader/SectionHeader";
// // import JobsCard from "./JobsCard";
// import "dotenv/config";

// const JobFeatures = () => {
//   const [jobs, setJobs] = useState([]);
//   const [isShow, setIsShow] = useState(false);
//   const [error, setError] = useState([]);
//   useEffect(() => {
//     // fetch("jobs.json")
//     //   .then((res) => res.json())
//     //   .then((data) => setJobs(data));

//     fetch("https://api.apijobs.dev/v1/job/search", {
//       method: "POST",
//       headers: {
//         'apikey': import.meta.env.VITE_JOB_API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         q: "Reactjs",
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setJobs(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         setError(error);
//         console.error("Error:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <SectionHeader
//         title={"Featured Jobs"}
//         subTitle={
//           "Explore thousands of job opportunities with all the information you need. Its your future"
//         }
//       />
//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 duration-300 gap-6">
//         {isShow
//           ? jobs?.map((job) => <JobsCard key={job.id} job={job} />)
//           : jobs?.slice(0, 4).map((job) => <JobsCard key={job.id} job={job} />)}
//       </div>
//       <div className="py-10 flex justify-center items-center">
//         <button
//           onClick={() => setIsShow(!isShow)}
//           className="btn bg-dark-blue text-white hover:bg-dark-blue duration-300"
//         >
//           {isShow ? "Show Less" : "Show More"}
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default JobFeatures;
