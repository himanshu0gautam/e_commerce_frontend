<<<<<<< HEAD
import {createBrowserRouter} from "react-router-dom";
=======
import { createBrowserRouter } from "react-router-dom";
>>>>>>> 32fa5452891a5faac190305d0a32625deee073c1

import Home from "../pages/Home.jsx";
import Jewellery from "../pages/Jewellery.jsx";
import Electronics from "../pages/Electronics.jsx";
import Fashion from '../pages/Fashion.jsx'
import Layout from "../layout/Layout.jsx";
import Grocery from '../pages/Grocery.jsx';
import HomeAndFurniture from "../pages/HomeAndFurniture.jsx";
<<<<<<< HEAD
import Layout from "../Layout.jsx";
import AllCategories from "../components/All-categories/AllCategories.jsx"
=======

>>>>>>> 32fa5452891a5faac190305d0a32625deee073c1



const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout />,
        children : [
            {
                index : true,
                element: <AllCategories />
            },
            {
                path:'jewellery',
                element: <Jewellery/>
            },
            {
                path:'grocery',
                element: <Grocery/>
            },
            {
                path:'electronics',
                element: <Electronics/>
            },
            {
                path:'home-and-furniture',
                element:<HomeAndFurniture/>
            },
            {
                path:'fashion',
                element: <Fashion/>
            },
        ]
    },

])

export default router;