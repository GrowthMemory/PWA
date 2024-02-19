import styled from "styled-components";
import ChatBot from "../components/chat/ChatBot";
import ChatInput from "../components/chat/ChatInput";
import UserChat from "../components/chat/UserChat";
import MainHeader from "../components/common/header/MainHeader";
import { BsChevronLeft } from "react-icons/bs";
export default function Chat() {
  return (
    <>
      <MainHeader>
        <BsChevronLeft />
        <span>꿈나무</span>
      </MainHeader>
      <Main>
        <ChatBot>
          <p>안녕? 난 너의 마음 속 나무야! 어떤게 궁금해?</p>
        </ChatBot>
        <UserChat>
          <p>응애 난 이런게 고민이야 이거 우째야해</p>
        </UserChat>
      </Main>
      <ChatInput />
    </>
  );
}

const Main = styled.main`
  width: 360px;
  height: 480px;
  display: flex;
  flex-direction: column;
  /* background-color: #1e5151; */
`;
