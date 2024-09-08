import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import JobFeatures from "../JobFeatures/JobFeatures";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <Banner />
      <Category />
      <JobFeatures />
    </div>
  );
};

export default Home;
