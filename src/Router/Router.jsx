import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import AppliedJobs from "../Components/AppliedJobs/AppliedJobs";
import Blog from "../Components/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
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
          path:"/appliedJobs",
          element:<AppliedJobs/>
        },
        {
          path:"/blog",
          element:<Blog/>
        }
      ],
    },
  ]);

export default router;