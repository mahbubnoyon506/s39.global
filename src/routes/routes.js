import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
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
        ]
    }
])

export default routes;