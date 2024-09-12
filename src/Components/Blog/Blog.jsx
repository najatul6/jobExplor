import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [isShow, setIsShow] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      {/*  Blog Header  */}
      <header className="bg-dark-blue py-10">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Job Explore Blog</h1>
          <p className="mt-2 text-lg">
            Your source for job search tips, interview hacks, and career advice
          </p>
        </div>
      </header>

      {/* Blog Posts  */}
      <section className="py-12 px-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={blog?.image?.src}
                  alt={blog?.image?.alt}
                  className="w-full h-[250px]"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {blog?.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {isShow? `${blog?.content?.description.slice(0,200)}`:`${blog?.content?.description}`}
                  </p>
                  <button onClick={()=>setIsShow(!isShow)} className="text-dark-blue hover:underline">
                   {isShow ? "Read more" : " Read Less"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Blog;
