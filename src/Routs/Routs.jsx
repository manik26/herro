import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPages from "../Pages/errorPages/ErrorPages";
import AddTory from "../Pages/AddTory/AddTory";
import MyTory from "../Pages/MyTory/MyTory";
import AllTory from "../Pages/AllTory/AllTory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTory",
        element: <AllTory></AllTory>,
        loader: () => fetch("http://localhost:8000/allTory"),
      },
      {
        path: "/myTory",
        element: <MyTory></MyTory>,
      },
      {
        path: "/addTory",
        element: <AddTory></AddTory>,
      },
    ],
  },
]);

export default router;
