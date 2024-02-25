import ChatInput from "../components/chat/ChatInput";
import MainHeader from "../components/common/header/MainHeader";
import ChatArea from "../components/chat/ChatArea";
import ChatProvider from "../components/provider/ChatProvider";
import * as s from "../components/css/common/mainHeader";
import { useNavigate } from "react-router-dom";
export default function Chat() {
  const navigate = useNavigate();
  return (
    <ChatProvider>
      <MainHeader>
        <s.Back onClick={() => navigate(-1)} />
        <span>꿈나무</span>
      </MainHeader>
      <ChatArea />
      <ChatInput />
    </ChatProvider>
  );
}
