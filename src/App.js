import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTop from "./components/backToTop/BackToTop";


function App() {
  return (
    <div>
      <RouterProvider router={routes}/>
      <BackToTop/>
    </div>
  );
}

export default App;
