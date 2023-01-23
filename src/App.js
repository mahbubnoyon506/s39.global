import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTop from "./components/backToTop/BackToTop";
import WalletLogin from "./components/WalletLogin";
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <div>
      <WalletLogin></WalletLogin>
      <RouterProvider router={routes} />
      <BackToTop />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
