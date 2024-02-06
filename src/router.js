import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import App from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
