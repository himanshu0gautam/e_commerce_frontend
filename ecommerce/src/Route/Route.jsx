import { createBrowserRouter } from "react-router-dom";
import AllCategories from "../components/All-categories/AllCategories.jsx";
import Layout from "../layout/Layout.jsx";
import SignInRoute from "../layout/SignInRote/SigninRoute.jsx";
import Electronics from "../pages/Electronics.jsx";
import Fashion from '../pages/Fashion.jsx';
import Grocery from '../pages/Grocery.jsx';
import Home from "../pages/Home.jsx";
import HomeAndFurniture from "../pages/HomeAndFurniture.jsx";
import Jewellery from "../pages/Jewellery.jsx";
import Login from "../pages/signIn/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "jewellery",
        element: <Jewellery />
      },
      {
        path: "allcategorie",
        element: <AllCategories />
      },
      {
        path: "grocery",
        element: <Grocery />
      },
      {
        path: "electronics",
        element: <Electronics />
      },
      {
        path: "home-and-furniture",
        element: <HomeAndFurniture />
      },
      {
        path: "fashion",
        element: <Fashion />
      },
    ]
  },
  {
    path: "/auth",
    element: <SignInRoute />,
    children: [
      {
        path: "login",   // child route -> /auth/signin
        element: <Login />
      }
    ]
  }
]);

export default router;
