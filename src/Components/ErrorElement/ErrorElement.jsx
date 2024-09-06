import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-3xl">No Data Found</p>
      <Link to="/">
        <button className="btn text-xl text-white">Go back</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
