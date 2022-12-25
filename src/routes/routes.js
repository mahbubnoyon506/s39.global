import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import AdminProfileUpdate from "../pages/Dashboard/Admin/AdminProfileUpdate";
import Admins from "../pages/Dashboard/Admin/Admins";
import Goals from "../pages/Dashboard/Admin/Goals/Goals";
import PortFound from "../pages/Dashboard/Admin/PortFound/PortFound";
import Wallets from "../pages/Dashboard/Admin/Wallets/Wallets";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import HowItworks from "../pages/HowItworks/HowItworks";
import Hosting from "../pages/HowItworks/HowItworks";
import Projects from "../pages/Projects/Projects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "howItWorks",
        element: <HowItworks />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard/admins",
        element: <Admins />,
      },
      {
        path: "/dashboard/updateadmin",
        element: <AdminProfileUpdate />,
      },
      {
        path: "/dashboard/wallets",
        element: <Wallets />,
      },
      {
        path: "/dashboard/golas",
        element: <Goals />,
      },
      {
        path: "/dashboard/portfound",
        element: <PortFound />,
      },
    ],
  },
]);

export default routes;
