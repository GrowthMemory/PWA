import styled from "styled-components";
import ChatBot from "../components/chat/ChatBot";
import ChatInput from "../components/chat/ChatInput";
import UserChat from "../components/chat/UserChat";
import MainHeader from "../components/common/header/MainHeader";
import { BsChevronLeft } from "react-icons/bs";
import ChatArea from "../components/chat/ChatArea";
import ChatProvider from "../components/provider/ChatProvider";
export default function Chat() {
  return (
    <ChatProvider>
      <MainHeader>
        <BsChevronLeft />
        <span>꿈나무</span>
      </MainHeader>
      <ChatArea />
      <ChatInput />
    </ChatProvider>
  );
}
