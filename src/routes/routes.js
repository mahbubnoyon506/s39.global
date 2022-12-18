import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Hosting from "../pages/Hosting/Hosting";
import HowItWorks from "../pages/HowItWorks/HowItWorks";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'howItWorks',
                element: <HowItWorks />
            },
            {
                path: 'hosting',
                element: <Hosting />
            },
        ]
    }
])

export default routes;