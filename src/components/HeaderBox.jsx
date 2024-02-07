import { Children, useContext } from "react";
import { SignUpContext } from "./context/SignUpContext";
import styled from "styled-components";

export default function HeaderBox({ children }) {
  const { headerText, setHeaderText } = useContext(SignUpContext);
  return (
    <Div>
      <Img src={`${process.env.PUBLIC_URL}/img/tree.png`} alt="" />
      <TextBox>{children}</TextBox>
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
