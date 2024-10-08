import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import AppliedJobs from "../Components/AppliedJobs/AppliedJobs";
import Blog from "../Components/Blog/Blog";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import JobDetails from "../Components/JobDetails/JobDetails";
import About from "../Components/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorElement/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path:"/statistics",
          element:<Statistics/>
        },
        {
          path:"/jobDetails/:id",
          element:<JobDetails/>,
          loader:()=>fetch('/jobs.json')
        },
        {
          path:"/appliedJobs",
          element:<AppliedJobs/>,
          loader:()=>fetch('/jobs.json')
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ],
    },
  ]);

export default router;