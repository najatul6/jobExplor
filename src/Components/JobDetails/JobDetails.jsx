import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const { job_title } = job;
  return (
    <div>
      <div className="py-20 bg-base-200  text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold uppercase">Job Details</h1>
        <p>{job_title}</p>
      </div>
      <div className="min-h-screen flex justify-center gap-5 items-center py-5 px-5">
        <div className="border-2 w-2/3 h-screen border-red-800">Hello Wold</div>
        <div className="border-2 w-1/3 h-screen border-blue-700">
          Hello Wold
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
