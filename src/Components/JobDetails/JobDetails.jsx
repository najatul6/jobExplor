import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const { 
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
   } = job;
  return (
    <div>
      <div className="py-20 bg-base-200  text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold uppercase">Job Details</h1>
        <p>{job_title}</p>
      </div>
      <div className="min-h-screen flex flex-col md:flex-row justify-center gap-5 items-center py-5 px-5">
        <div className="border-2 w-2/3 h-screen border-red-800">
        <p>
        <span>Job Description: </span> {job_description}
        </p>
        </div>
        <div className="border-2 w-1/3 h-screen border-blue-700">
          Hello Wold
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
