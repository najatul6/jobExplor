import { BsPersonWorkspace } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

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
  const handleApply = () => {
    saveJobApplication(idInt)
    toast("Your have applied successfully");
  };
  return (
    <div className="text-white">
      <div className="py-20 bg-base-200  text-white flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold uppercase">Job Details</h1>
        <p>{job_title}</p>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center py-20">
        <div className="md:col-span-3 px-5 flex flex-col justify-center items-start gap-6">
          <p>
            <span className="font-bold text-lg">Job Description: </span>{" "}
            {job_description}
          </p>
          <p>
            <span className="font-bold text-lg">Job Responsibility: </span>{" "}
            {job_responsibility}
          </p>
          <div>
            <h4 className="font-bold text-lg">Educational Requirements: </h4>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Experiences: </h4>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center items-center gap-6 px-2">
          <div className="bg-gray-700  rounded-xl w-full p-5 flex flex-col gap-6">
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="w-full">
                <h2 className="text-xl font-bold capitalize">Job Details</h2>
                <hr />
              </div>
              <p className="flex gap-2 justify-start items-center">
                <HiOutlineCurrencyDollar className="font-bold text-xl text-dark-blue" />
                <span className="font-bold">Salary :</span>
                {salary}
              </p>
              <p className="flex gap-2 justify-start items-center">
                <BsPersonWorkspace className="font-bold text-xl text-dark-blue" />
                <span className="font-bold">Job Title :</span>
                {job_title}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="w-full">
                <h2 className="text-xl font-bold capitalize">
                  Contact Information
                </h2>
                <hr />
              </div>
              <p className="flex gap-2 justify-start items-center">
                <FaPhoneAlt className="font-bold text-xl text-dark-blue" />
                <span className="font-bold">Phone : </span>
                {contact_information.phone}
              </p>
              <p className="flex gap-2 justify-start items-center">
                <IoMail className="font-bold text-xl text-dark-blue" />
                <span className="font-bold">Email : </span>
                {contact_information.email}
              </p>
              <p className="flex gap-2 justify-start items-center">
                <FaLocationDot className="font-bold text-xl text-dark-blue" />
                <span className="font-bold">Address : </span>{" "}
                {contact_information.address}
              </p>
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={handleApply}
              className="btn outline-none border-none w-full bg-custom-gradient text-white hover:font-extrabold"
            >
              Apply Now
            </button>
            <ToastContainer position="top-center" autoClose={1500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
