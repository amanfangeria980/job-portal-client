import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../Pages/Home";
import About from './../Pages/About';
import PostJob from './../Pages/PostJob';
import MyJobs from './../Pages/MyJobs';
import SalaryPage from "../Pages/SalaryPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />
      },
      {
        path: "/salary",
        element: <SalaryPage />
      }
    ],
  },
]);

export default router;
