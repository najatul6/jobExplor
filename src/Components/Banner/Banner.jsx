import bannerImg from "../../assets/man.png";
const Banner = () => {
  return (
    <div className="grid grid-cols-2 place-items-center mx-auto py-5 w-full">
      <div className="w-2/3 space-y-6">
        <h2 className="text-4xl font-bold capitalize">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-blue-500">Dream Job</span>
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn bg-blue-500 text-white">Get Started</button>
      </div>
        <img src={bannerImg} alt="" className="w-full object-cover" />
    </div>
  );
};

export default Banner;
