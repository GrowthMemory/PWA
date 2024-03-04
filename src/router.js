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
import Report from "./pages/Report";
import MyPage from "./pages/MyPage";
import Chat from "./pages/Chat";
import ChatMain from "./components/chat/ChatMain";
import Information from "./components/common/information/Information";

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
  {
    path: "/Report",
    element: <Report />,
  },
  {
    path: "/MyPage",
    element: <MyPage />,
  },
  {
    path: "/ChatMain",
    element: <ChatMain />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
  {
    path: "/Information",
    element: <Information />,
  },
]);

export default router;
