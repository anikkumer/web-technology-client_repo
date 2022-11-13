import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://web-technology.onrender.com/courses"),
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://web-technology.onrender.com/courses`),
      },
      {
        path: "/courses/:id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`https://web-technology.onrender.com/courses/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
