import { createBrowserRouter } from "react-router-dom";
import AllCategories from "../components/All-categories/AllCategories.jsx";
import Home from "../pages/Home.jsx";
import Jewellery from "../pages/Jewellery.jsx";
import Electronics from "../pages/Electronics.jsx";
import Fashion from '../pages/Fashion.jsx'
import Layout from "../layout/Layout.jsx";
import Grocery from '../pages/Grocery.jsx';
import HomeAndFurniture from "../pages/HomeAndFurniture.jsx";



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