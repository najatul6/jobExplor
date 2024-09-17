import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const JobsCard = ({ job }) => {
  const {
    applicantLocationRequirementsName,
    applicantLocationRequirementsType,
    description,
    employmentType,
    hiringOrganizationName,
    identifierName,
    industry,
    title,
    region,
    identifierValue,
    url
  } = job;
  return (
    <div className="border p-5 rounded-xl flex flex-col justify-center items-start gap-6">
     
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <h6>{industry}</h6>
        <h6>{hiringOrganizationName}</h6>
        <h6>{identifierName}</h6>
        <h6>{applicantLocationRequirementsName}</h6>
        <h6>{applicantLocationRequirementsType}</h6>
        <h6>{applicantLocationRequirementsType}</h6>
      </div>

      <div className="flex justify-start gap-5 items-center">
        <p className="flex gap-1 justify-center items-center">
          <FaLocationDot /> {region}
        </p>
        <p className="flex gap-1 justify-center items-center">
          <FaDollarSign /> {identifierValue} USD
        </p>
      </div>
      <p>
        {description.slice(0,200)}
      </p>
      <h5 className="text-lg font-bold text-blue-600 border-blue-600 bg-transparent border-2 rounded-xl py-2 px-3">
          {employmentType}
        </h5>
      <Link to={url}>
        <button className="btn bg-dark-blue text-white hover:bg-blue-950 outline-none border-0 text-xl capitalize">
          View Details
        </button>
      </Link>
    </div>
  );
};
JobsCard.propTypes = {
  job: PropTypes.object,
};

export default JobsCard;
