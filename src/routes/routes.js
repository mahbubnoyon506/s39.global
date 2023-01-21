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
// import Login from "../components/Auth/Login";
import Profile from "../pages/Profile/Profile";

// import ResetPassword from "../components/Auth/ResetPassword";
import AdminRoutes from "../components/ProtectedRoutes/AdminRoutes";
import User from "../pages/Dashboard/User/User";
import MinarelTokens from "../pages/MinarelTokens/MinarelTokens";
import ClaimToken from "../pages/MinarelTokens/ClaimToken";
import HowItWorksDashboard from "../pages/Dashboard/HowItWorksDashboard/HowItWorksDashboard";
import WithdrawAndDeposit from "../pages/WithdrawAndDeposit/WithdrawAndDeposit";
import UserDetails from "../pages/Dashboard/User/UserDetails";
import Userdetails from "../pages/Dashboard/Admin/KYCItems/UserDetails/Userdetails";
import KycForgetPassword from "../components/Auth/KycForgetPassword";
import KycLogin from "../pages/KYCArea/KycAccount/KycLogin/KycLogin";
import KycResetPassword from "../components/Auth/KycResetPassword";
import KycSignUp from "../pages/KYCArea/KycAccount/KycSignUp/KycSignUp"
import ResetPassword from "../components/Auth/AdminIssue/ResetPassword";
import Login from "../components/Auth/AdminIssue/Login";
import Otp from "../components/Auth/AdminIssue/Otp";
import KYC from "../pages/KYCArea/KYC/KYC";
import RequireKycAuth from "../components/Auth/RequireKycAuth";
import Verified from "../pages/Dashboard/Admin/KYCItems/verified/Verified";
import NonVerified from "../pages/Dashboard/Admin/KYCItems/verified/NonVerified";
import Pending from "../pages/Dashboard/Admin/KYCItems/Pending/Pending";

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

      /*******************************  KYC Start ***************************** */
      {
        path: '/kyc/login',
        element: <KycLogin />
      },
      {
        path: '/kyc/login/forgetpassword',
        element: <KycForgetPassword />
      },
      {
        path: "/kyc/login/resetPassword/:token",
        element: <KycResetPassword />
      },
      {
        path: '/kyc/sign-up',
        element: <KycSignUp />
      },
      {
        path: '/kyc',
        element:
          <RequireKycAuth>
            <KYC />
          </RequireKycAuth>,
        children: [
          {
            path: "profile",
            element: <KYC />,
          },
        ]
      },

      /****************************** KYC Start End ******************************/
      {
        path: "/mineraltoken",
        element: <MinarelTokens />,
      },
      {
        path: "/claimtoken/:neededSPoint/:givenSPoint",
        element: <ClaimToken />,
      },
      {
        path: "/claiming",
        element: <WithdrawAndDeposit />,
      },
    ],
  },
  {
    path: "/admin",
    element:
      // <Dashboard />,
      <AdminRoutes>
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
        path: "admins/:allAdmins",
        element: <Admins />
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
        path: "users",
        element: <User />,
      },
      {
        path: "userdetails/:id",
        element: <UserDetails />,
      },
      {
        path: "dashboardhowitworks",
        element: <HowItWorksDashboard />,
      },
      // KYC Items
      {
        path: 'verified',
        element: <Verified />
      },
      {
        path: 'verified/:verifiedPerPage',
        element: <Verified />
      },
      {
        path: 'non-verified',
        element: <NonVerified />
      },
      {
        path: 'non-verified/:nonVerifiedPerPage',
        element: <NonVerified />
      },
      {
        path: 'pending',
        element: <Pending />
      },
      {
        path: 'pending/:pendingPerPage',
        element: <Pending />
      },
      {
        path: 'kycuser-details/:walletAddress',
        element: <Userdetails />
      },
    ],
  },
]);

export default routes;
