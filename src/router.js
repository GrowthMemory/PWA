import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import IsLoginTemplate from "./pages/IsLoginTemplate";
import Login from "./pages/Login";
import CreateName from "./pages/CreateName";
import CollectPersonalData from "./components/collectPersonalData/CollectPersonalData";
import Splash from "./pages/Splash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/SignUp",
    element: <CollectPersonalData />,
  },
  {
    path: "/CreateName",
    element: <CreateName />,
  },
  {
    path: "/Login",
    element: (
      <IsLoginTemplate>
        <Login />
      </IsLoginTemplate>
    ),
  },
  {
    path: "/loginSuccess",
    element: <div>Login SUccess</div>,
  },
]);

export default router;
