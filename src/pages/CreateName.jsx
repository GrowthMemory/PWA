import { useState } from "react";
import styled from "styled-components";
import SignUpProvider from "../components/provider/SignUpPovider";
import BackHeader from "../components/common/header/BackHeader";
import HeaderBox from "../components/common/header/HeaderBox";
import OverlapButton from "../components/createName/OverlapButton";
import OverlapSpan from "../components/createName/OverlapSpan";
import Button from "../components/common/Button";
export default function CreateName() {
  const [inputText, setInputText] = useState("");
  return (
    <SignUpProvider>
      <BackHeader />
      <Section>
        <HeaderBox>
          <span>서비스에서 불리고 싶은</span>
          <span>닉네임을 알려주세요</span>
        </HeaderBox>
        <Div>
          <div>
            <InputBox>
              <Input
                type="text"
                maxLength={10}
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
              <OverlapButton inputText={inputText} overLapText={overLapText} />
            </InputBox>
            <OverlapSpan overLapText={overLapText} />
          </div>
        </Div>
        <Button text={"next"} className={"serch_box"} />
      </Section>
    </SignUpProvider>
  );
}

let overLapText = {
  btn: {
    none: "중복확인",
    false: "사용불가",
    true: "사용가능",
  },
  span: {
    none: "한글, 영어 2~10자리까지 가능해요.",
    false: "이 닉네임으로 하시겠어요?",
    true: "아쉽지만 다른 닉네임을 선택해주세요.",
  },
};

const Section = styled.section`
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const InputBox = styled.div`
  width: 312px;
  height: 42px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  width: 360px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  text-indent: 13px;
  border: none;
  border-radius: 10px;
  outline: none;
`;
