import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Hosting from "../pages/Hosting/Hosting";
import Projects from "../pages/Projects/Projects";


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
                path: 'hosting',
                element: <Hosting />
            },
            {
                path: 'projects',
                element: <Projects />
            },
        ]
    }
])

export default routes;