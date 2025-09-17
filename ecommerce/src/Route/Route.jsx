import {createBrowserRouter} from "react-router-dom";

import Home from "../pages/Home.jsx";
import Jewellery from "../pages/Jewellery.jsx";
import Grocery from '../pages/Grocery.jsx'
import Electronics from "../pages/Electronics.jsx";
import Cloths from "../pages/Cloths.jsx";
import HomeAndFurniture from "../pages/HomeAndFurniture.jsx";
import Layout from "../Layout.jsx";
import AllCategories from "../components/All-categories/AllCategories.jsx"



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
                path:'cloths',
                element: <Cloths/>
            },
        ]
    },

])

export default router;