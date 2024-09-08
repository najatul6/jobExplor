
const Blog = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-7xl text-white">
        {/* <!-- Blog Header --> */}
  <header className="bg-blue-500 py-10">
    <div className="container mx-auto text-center text-white">
      <h1 className="text-4xl font-bold">Job Seeker's Blog</h1>
      <p className="mt-2 text-lg">Your source for job search tips, interview hacks, and career advice</p>
    </div>
  </header>

  {/* <!-- Blog Posts --> */}
  <section className="py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Blog Post 1 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Resume Writing" className="w-full"/>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">5 Tips for Writing a Standout Resume</h2>
          <p className="text-gray-600 mb-4">Learn how to make your resume stand out with these simple but effective tips.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>

      {/* <!-- Blog Post 2 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Interview Preparation" className="w-full"/>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ace Your Next Interview with These Tricks</h2>
          <p className="text-gray-600 mb-4">From body language to asking the right questions, here’s how to nail your next job interview.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>

      {/* <!-- Blog Post 3 --> */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Networking" className="w-full"/>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Networking: How to Build Meaningful Connections</h2>
          <p className="text-gray-600 mb-4">Discover strategies to effectively network in both online and offline environments.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Blog