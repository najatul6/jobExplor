import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import JobFeatures from "../JobFeatures/JobFeatures"

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-7xl text-white">
      <Banner/>
      <Category/>
      <JobFeatures/>

      </div>
  )
}

export default Home