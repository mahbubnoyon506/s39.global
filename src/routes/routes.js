import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import AdminProfileUpdate from "../pages/Dashboard/Admin/AdminProfileUpdate";
import Admins from "../pages/Dashboard/Admin/Admins";
import Goals from "../pages/Dashboard/Admin/Goals/Goals";
import PortFound from "../pages/Dashboard/Admin/PortFound/PortFound";
import Hosting from "../pages/Dashboard/Admin/Hosting/Hosting";
import Wallets from "../pages/Dashboard/Admin/Wallets/Wallets";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import HowItworks from "../pages/HowItworks/HowItworks";
// import Hosting from "../pages/HowItworks/HowItworks";
import Projects from "../pages/Projects/Projects";
import Reward from "../pages/Dashboard/Admin/Reward/Reward";
import CommunityVote from "../pages/Dashboard/Admin/CommunityVote/CommunityVote";
import Ngwb from "../pages/Dashboard/Admin/NGWB/Ngwb";
import Specifications from "../pages/Specifications/Specifications";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition/TermsCondition";
import Store from "../pages/Store/Store";
import ForgetPassword from "../components/Auth/ForgetPassword";
import Otp from "../components/Auth/Otp";
import Login from "../components/Auth/Login";
import Profile from "../pages/Profile/Profile";

import ResetPassword from "../components/Auth/ResetPassword";
import { useEffect } from "react";
import AdminRoutes from "../components/ProtectedRoutes/AdminRoutes";
import User from "../pages/Dashboard/User/User";
import MinarelTokens from "../pages/MinarelTokens/MinarelTokens";
import ClaimToken from "../pages/MinarelTokens/ClaimToken";

const time = new Date();
time.setSeconds(time.getSeconds() + 180);

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
      {
        path: "specification",
        element: <Specifications />,
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "termscondition",
        element: <TermsCondition />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "profile",
        element: <Profile expiryTimestamp={time} />,
      },
      //Authentications
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/forgetpassword',
        element: <ForgetPassword />
      },
      {
        path: '/reset-password/:token',
        element: <ResetPassword />
      },
      {
        path: '/admin/otp/:token',
        element: <Otp />
      },
      {
        path: "/mineraltoken",
        element: <MinarelTokens />,
      },
      {
        path: "/claimtoken",
        element: <ClaimToken />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoutes>
      <Dashboard />
    </AdminRoutes>,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "reward",
        element: <Reward />,
      },
      {
        path: "admins",
        element: <Admins />,
      },
      {
        path: "updateadmin/:id",
        element: <AdminProfileUpdate />,
      },
      {
        path: "wallets",
        element: <Wallets />,
      },
      {
        path: "vote",
        element: <CommunityVote />,
      },
      {
        path: "golas",
        element: <Goals />,
      },
      {
        path: "ngwb",
        element: <Ngwb />,
      },
      {
        path: "portfound",
        element: <PortFound />,
      },
      {
        path: "hosting",
        element: <Hosting />,
      },
      {
        path: "user",
        element: <User />,
      },

    ],
  },
]);

export default routes;
