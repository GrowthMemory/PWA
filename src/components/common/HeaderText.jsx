import { useContext } from "react";
import { SignUpContext } from "../context/SignUpContext";
import styled from "styled-components";

export default function HeaderText() {
  const { headerText, setHeaderText } = useContext(SignUpContext);
  let headerTextTop = [
    // "Growth Memory",
    "서비스 이용을 위해",
    "서비스에서 불리고 싶은",
  ];
  let headerTextBttom = [
    // "오늘도 성장하는 나를 위해",
    "약관 동의를 해주세요 :)",
    "닉네임을 알려주세요",
  ];
  return (
    <Div>
      <Img src={`${process.env.PUBLIC_URL}/img/tree.png`} alt="" />
      <TextBox>
        <span>{headerTextTop[headerText]}</span>
        <span>{headerTextBttom[headerText]}</span>
      </TextBox>
    </Div>
  );
}

const Div = styled.div`
  margin: 24px 16px 24px 16px;
  width: 312px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  width: 210px;
  height: 50px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
`;

const Img = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 38px;
`;
