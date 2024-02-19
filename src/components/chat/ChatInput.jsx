import styled from "styled-components";
import { HiPaperAirplane } from "react-icons/hi2";

export default function ChatInput() {
  return (
    <Div>
      <InputBox>
        <Textarea></Textarea>
        <Btn>
          <HiPaperAirplane />
        </Btn>
      </InputBox>
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const InputBox = styled.div`
  padding: 10px 12px 10px 12px;
  width: 304px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  background-color: #fff;
`;

const Textarea = styled.textarea`
  width: 270px;
  height: 60px;
  border: none;
  font-size: 14px;
  resize: none;
  outline: none;
`;

const Btn = styled.button`
  margin-left: 4px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ac479;
  outline: none;
`;
