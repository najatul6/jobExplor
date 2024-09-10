import { useLoaderData } from "react-router-dom"

const AppliedJobs = () => {
  const jobs= useLoaderData()
  return (
    <div className=" text-white">
      Applied Jobs
      </div>
  )
}

export default AppliedJobs