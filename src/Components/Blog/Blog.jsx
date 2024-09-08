const Blog = () => {
  return (
    <div className="">
      {/*  Blog Header  */}
      <header className="bg-blue-500 py-10">
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/D5612AQFy_NJo_nk1qA/article-cover_image-shrink_720_1280/0/1709749983417?e=2147483647&v=beta&t=fUF4HhVLGgBqtnw98fuuDYPctIGiPMyHhLwRVRGGVCY"
              alt="Resume Writing"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                5 Tips for Writing a Standout Resume
              </h2>
              <p className="text-gray-600 mb-4">
                Learn how to make your resume stand out with these simple but
                effective tips.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://gsb.hse.ru/pubs/share/direct/408305373.png"
              alt="Interview Preparation"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Ace Your Next Interview with These Tricks
              </h2>
              <p className="text-gray-600 mb-4">
                From body language to asking the right questions, here’s how to
                nail your next job interview.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://www.thenewellgroup.com/wp-content/uploads/2023/08/Connection-cover-1024x683.png"
              alt="Networking"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Networking: How to Build Meaningful Connections
              </h2>
              <p className="text-gray-600 mb-4">
                Discover strategies to effectively network in both online and
                offline environments.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbMmDhm2AqIWBmGKP7Y_nsdBnWUgxgPi_Tg&s"
              alt="Salary Negotiation"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Mastering Salary Negotiation: A Step-by-Step Guide
              </h2>
              <p className="text-gray-600 mb-4">
                Don’t leave money on the table! Learn how to negotiate your
                salary with confidence.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGqgcKhCYE4kz6iIPn3jRKr2qVS3Pfe1OCQ&s"
              alt="Career Change"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                How to Transition to a New Career Successfully
              </h2>
              <p className="text-gray-600 mb-4">
                Switching careers can be daunting, but with the right strategy,
                you can do it!
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWQRQ0-RG1SKMPU9GEOaLwhjnRAsW_E-Z_w&s"
              alt="Remote Jobs"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Top Remote Job Opportunities for 2024
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for remote work? Here are some of the best industries
                and roles for remote jobs this year.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtpYAFlrzqesAaqQyu6sgo1RGb99uZqUk8g&s"
              alt="Job Market Trends"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Job Market Trends You Need to Know in 2024
              </h2>
              <p className="text-gray-600 mb-4">
                Stay ahead of the curve by understanding the latest trends in
                the job market.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3kYHpNfMGyGI_XeTK_CDSbgfxnKObdPJNFWQVCCvIhMYWpaNleLuB_BYjBmN3gyJJ0&usqp=CAU"
              alt="Interview Follow-up"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                The Importance of Following Up After an Interview
              </h2>
              <p className="text-gray-600 mb-4">
                Make a lasting impression with these follow-up strategies after
                your interview.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXERi3UVmbega8Ku9vpB32VCJUI-suqasMg&s"
              alt="Building a Personal Brand"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Why Building a Personal Brand is Crucial in 2024
              </h2>
              <p className="text-gray-600 mb-4">
                Set yourself apart by building a unique personal brand that
                resonates with employers.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZkg_EOVxxPubE7MGM0WsYEuIYYrxj-DzPQ&s"
              alt="Cover Letter Tips"
              className="w-full"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Crafting a Cover Letter That Gets You Noticed
              </h2>
              <p className="text-gray-600 mb-4">
                Here’s how to write a cover letter that catches the eye of
                hiring managers.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
