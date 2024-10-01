import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import JobFeatures from "../JobFeatures/JobFeatures";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <div className="text-white px-10">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Category />
      <JobFeatures />
      <Faq/>
    </div>
  );
};

export default Home;
