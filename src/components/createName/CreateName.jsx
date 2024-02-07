import styled from "styled-components";
import Header from "../common/header/Header";
import Button from "../common/Button";
import { useContext, useState } from "react";
import { SignUpContext } from "../context/SignUpContext";
export default function CreateName() {
  const { overlapCheck } = useContext(SignUpContext);
  const [inputText, setInputText] = useState("");
  return (
    <Section>
      <Header />
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
            <Btn
              state={overlapCheck}
              onClick={() => {
                fetchFunc(inputText);
              }}
            >
              {overLapText.btn[overlapCheck]}
            </Btn>
          </InputBox>
          <Span>{overLapText.span[overlapCheck]}</Span>
        </div>
      </Div>
      <Button text={"next"} className={"serch_box"} />
    </Section>
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

async function fetchFunc(inputText) {
  try {
    const response = await fetch("link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputText),
    });
  } catch (err) {
    console.log(err);
  }
}

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

const Btn = styled.button`
  margin-right: 7px;
  width: 50px;
  height: 24px;
  border-radius: 7px;
  border: none;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => {
    if (props.state == "none") return "#8E8E93";
    else if (props.state == "false") return "#DC2424";
    else return "#5AC479";
  }};
`;

const Span = styled.span`
  margin-left: 12px;
  font-size: 12px;
`;
