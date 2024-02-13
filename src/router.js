import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import IsLoginTemplate from "./pages/IsLoginTemplate";
import Login from "./pages/Login";
import CreateName from "./pages/CreateName";
import CollectPersonalData from "./pages/CollectPersonalData";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Retrospection from "./pages/Retrospection";
import Calendar from "./pages/Calendar";

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
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Write",
    element: <Retrospection />,
  },
  {
    path: "/Calendar",
    element: <Calendar />,
  },
]);

export default router;
