import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import App from "./pages/App";
import IsLoginTemplate from "./pages/IsLoginTemplate";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/SignUp",
    element: <SignUp />,
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
