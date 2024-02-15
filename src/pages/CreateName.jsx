import { useState } from "react";
import SignUpProvider from "../components/provider/SignUpPovider";
import BackHeader from "../components/common/header/BackHeader";
import HeaderBox from "../components/common/header/HeaderBox";
import OverlapButton from "../components/createName/OverlapButton";
import OverlapSpan from "../components/createName/OverlapSpan";
import Button from "../components/common/Button";
import * as s from "../components/css/createName/createName";
export default function CreateName() {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <BackHeader />
      <s.Section>
        <HeaderBox>
          <s.Img src={"img/tree.png"} alt="" />
          <s.TextBox>
            <span>서비스에서 불리고 싶은</span>
            <span>닉네임을 알려주세요</span>
          </s.TextBox>
        </HeaderBox>
        <SignUpProvider>
          <s.Div>
            <div>
              <s.InputBox>
                <s.Input
                  type="text"
                  maxLength={10}
                  placeholder="닉네임을 입력해주세요"
                  onChange={(e) => {
                    setInputText(e.target.value);
                  }}
                />
                <OverlapButton
                  inputText={inputText}
                  overLapText={overLapText}
                />
              </s.InputBox>
              <OverlapSpan overLapText={overLapText} />
            </div>
          </s.Div>
          <Button text={"next"} />
        </SignUpProvider>
      </s.Section>
    </>
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
