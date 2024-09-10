import { BsPersonWorkspace } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="text-white">
      <div className="py-20 bg-base-200  text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold uppercase">Job Details</h1>
        <p>{job_title}</p>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center py-20">
        <div className="md:col-span-3 p-5">
          <p>
            <span>Job Description:</span> {job_description}
          </p>
          <p>
            <span>Job Responsibility:</span> {job_responsibility}
          </p>
          <h4>Educational Requirements:</h4>
          <p>{educational_requirements}</p>
          <h4>Experiences:</h4>
          <p>{experiences}</p>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center items-center gap-6">
          <div className="bg-gray-700 p-5 rounded-xl ">
            <div>
              <div>
                <h2 className="text-xl font-bold capitalize">Job Details</h2>
                <hr />
              </div>
              <p className="flex gap-2 justify-start items-center">
                <HiOutlineCurrencyDollar />
                <span className="font-bold ">Salary :</span>
                {salary}
              </p>
              <p className="flex gap-2 justify-start items-center">
                <BsPersonWorkspace />
                <span>Job Title :</span>
                {job_title}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold capitalize">Contact Information</h2>
              <hr />
              <p className="flex gap-2 justify-start items-center">
                <FaPhoneAlt />
                <span>Phone : </span>
                {contact_information.phone}
              </p>
              <p className="flex gap-2 justify-start items-center">
                <IoMail />
                <span>Email : </span>
                {contact_information.email}
              </p>
              <p className="flex text-wrap justify-start items-center text-base">
                <FaLocationDot />
                <span>Address :</span> {contact_information.address}
              </p>
            </div>
          </div>
          <button className="btn outline-none border-none w-full bg-custom-gradient text-white hover:font-extrabold">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
