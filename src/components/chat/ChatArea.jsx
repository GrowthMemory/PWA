import styled from "styled-components";
import ChatBot from "./ChatBot";
import UserChat from "./UserChat";
import { useContext } from "react";
import { ChatContext } from "../context/context";
import { firebaseAuth } from "../../service/firebaseConfig";
import * as s from "../css/chat/chat";
export default function ChatArea() {
  const { sendChat, showAnswer, setShowAnswer, message } =
    useContext(ChatContext);
  if (sendChat) {
    setTimeout(() => setShowAnswer(true), 2000);
  }
  return (
    <s.Main>
      <ChatBot>
        <p>
          안녕하세요?? 전 {firebaseAuth.currentUser.displayName}님의 마음 속
          나무입니다! 어떤게 궁금하세요?
        </p>
      </ChatBot>
      {sendChat && (
        <UserChat>
          <p>{message}</p>
        </UserChat>
      )}
      {showAnswer && (
        <ChatBot>
          <p>
            그런 상황이었던 거라면 정말 힘든 일이 많으셨겠어요. 하지만 너무
            무섭진 마세요. 저는 도와드릴 수 있어요. 어떤 일인지 더 자세히
            말씀해주시겠어요? 마음을 편히 드세요. 저에게 말씀해주세요. 저는 항상
            곁에 있어요. 당신의 행복을 위해도 노력하고 있어요
          </p>
        </ChatBot>
      )}
    </s.Main>
  );
}
